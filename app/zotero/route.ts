import crypto from "crypto"
import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
import OAuth from "oauth-1.0a"

import { createSupabaseApiClient } from "@/utils/supabase/api"
import { createServerClient } from "@/utils/supabase/server"

const clientKey = "3d0d42f24fa628084962"
const clientSecret = "d91f1665215a99647926"
const callbackUrl = "http://localhost:3000/zotero"

const request_token_endpoint = "https://www.zotero.org/oauth/request"
const zotero_authorize_endpoint = "https://www.zotero.org/oauth/authorize"

export async function GET(request: NextRequest) {
  const supabase = createServerClient()
  const apiClient = createSupabaseApiClient(supabase)
  const cookieStore = cookies()
  const requestUrl = new URL(request.url)
  const origin = requestUrl.origin
  const searchParams = request.nextUrl.searchParams

  if (searchParams.get("_rsc")) {
    return NextResponse.json({ status: 200 })
  }

  if (searchParams.get("projectId")) {
    const projectId = searchParams.get("projectId")
    cookieStore.set("projectId", projectId!)
  }

  const projectId = cookieStore.get("projectId")?.value as string

  const profile = await apiClient.profile.getUserProfile()
  if (!profile) {
    return NextResponse.json({ error: "No profile found" }, { status: 500 })
  }

  const oauth_state = await apiClient.profile.getZoteroState()

  switch (oauth_state) {
    case 0: {
      // Inititiate handshake to get temp token
      try {
        const oauth = new OAuth({
          consumer: {
            key: clientKey,
            secret: clientSecret,
          },
          signature_method: "HMAC-SHA1",
          hash_function(base_string, key) {
            return crypto.createHmac("sha1", key).update(base_string).digest("base64")
          },
        })

        const tokenRequestConfig = {
          url: request_token_endpoint,
          method: "POST",
          data: {
            oauth_callback: callbackUrl,
          },
        }

        const tokenRequestResponse = await fetch(request_token_endpoint, {
          headers: {
            ...oauth.toHeader(oauth.authorize(tokenRequestConfig)),
          },
          method: "post",
        })

        const tokenRequestData = await tokenRequestResponse.text()
        const keyValuePairs = tokenRequestData.split("&")

        const tokens: { [key: string]: string } = {}

        keyValuePairs.forEach(pair => {
          const [key, value] = pair.split("=")
          tokens[key] = value
        })

        const oAuthToken = tokens["oauth_token"]
        const oAuthTokenSecret = tokens["oauth_token_secret"]

        cookieStore.set("oAuthToken", oAuthToken)
        cookieStore.set("oAuthTokenSecret", oAuthTokenSecret)

        await apiClient.profile.updateProfile(profile.id, { ...profile, zotero_oauth_state: 1 })

        const authorize_url =
          zotero_authorize_endpoint + `?oauth_token=${oAuthToken}&all_groups=read`
        return NextResponse.redirect(authorize_url)
      } catch (e) {
        console.error("Error occured", e)
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
      }
    }
    case 1: {
      // Handle callback and use verifier token to get access token and store it
      const callbackOAuthToken = searchParams.get("oauth_token")
      const oAuthVerifier = searchParams.get("oauth_verifier")
      const oAuthToken = cookieStore.get("oAuthToken")?.value as string
      const oAuthTokenSecret = cookieStore.get("oAuthTokenSecret")?.value as string

      // If there is no oAuth Token, reset the process
      if (!oAuthToken) {
        await apiClient.profile.updateProfile(profile.id, { ...profile, zotero_oauth_state: 0 })
        return NextResponse.redirect(`${origin}/zotero`)
      }

      // Check if oAuthToken returned matches the one in cookies
      if (callbackOAuthToken != oAuthToken) {
        return NextResponse.json({ error: "Mismatched oAuthToken in callback" }, { status: 502 })
      }

      const oauth = new OAuth({
        consumer: {
          key: clientKey,
          secret: clientSecret,
        },
        signature_method: "HMAC-SHA1",
        hash_function(base_string, key) {
          return crypto.createHmac("sha1", key).update(base_string).digest("base64")
        },
      })

      const tokenExchangeConfig = {
        url: `https://www.zotero.org/oauth/access?oauth_token=${oAuthToken}`,
        method: "POST",
        data: {
          oauth_verifier: oAuthVerifier,
        },
      }

      const tokenExchangeResponse = await fetch(
        `https://www.zotero.org/oauth/access?oauth_token=${oAuthToken}`,
        {
          headers: {
            ...oauth.toHeader(
              oauth.authorize(tokenExchangeConfig, {
                key: oAuthToken,
                secret: oAuthTokenSecret,
              }),
            ),
          },
          method: "post",
        },
      )

      const tokenExchangeData: string = await tokenExchangeResponse.text()
      const keyValuePairs = tokenExchangeData.split("&")

      const userData: { [key: string]: string } = {}

      keyValuePairs.forEach(pair => {
        const [key, value] = pair.split("=")
        userData[key] = value
      })

      const _username = userData["username"]
      const userId = userData["userID"]
      const userAPIKey = userData["oauth_token_secret"]

      // Store API key to DB and get all citations from Zotero to populate DB
      if (userAPIKey) {
        await apiClient.profile.updateProfile(profile.id, {
          ...profile,
          zotero_oauth_state: 2,
          zotero_userId: userId,
          zotero_api_key: userAPIKey,
        })

        const response = await fetch(
          `https://api.zotero.org/users/${userId}/items?itemType=journalArticle`,
          {
            headers: {
              "Zotero-API-Key": userAPIKey,
            },
          },
        )

        const zoteroCitations = await response.json().then(body => {
          return body
        })

        await apiClient.citation.populateCitations(zoteroCitations, parseInt(projectId))
      }

      return NextResponse.redirect(`${origin}/project/${projectId}`)
    }
  }
}
