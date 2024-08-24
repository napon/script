import crypto from "crypto"
import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
import OAuth from "oauth-1.0a"

import { createClient } from "@/utils/supabase/server"

const clientKey = "3d0d42f24fa628084962"
const clientSecret = "d91f1665215a99647926"
const callbackUrl = "http://localhost:3000/zotero"

const request_token_endpoint = "https://www.zotero.org/oauth/request"
const zotero_authorize_endpoint = "https://www.zotero.org/oauth/authorize"

export async function GET(request: NextRequest) {
  const supabase = createClient()
  const cookieStore = cookies()
  const requestUrl = new URL(request.url)
  const origin = requestUrl.origin

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { data: profiles, error } = await supabase.from("profiles").select().eq("id", user?.id).returns<Profile[]>()

  if (error) {
    console.error("Cannot get user profile", error)
    return []
  }
  const oauth_state = profiles[0].zotero_oauth_state

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
          headers: oauth.toHeader(oauth.authorize(tokenRequestConfig)),
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

        const { error } = await supabase.from("profiles").update({ zotero_oauth_state: 1 }).eq("id", user?.id)
        if (error) {
          console.error("Couldn't update oauth state", error)
        }

        const authorize_url = zotero_authorize_endpoint + `?oauth_token=${oAuthToken}&all_groups=read`
        return NextResponse.redirect(authorize_url)
      } catch (e) {
        console.error("Error occured", e)
        return e
      }
    }
    case 1: {
      // TODO: If we are in state 1, there should be an oAuth Token, check for it

      // Handle callback and use verifier token to get access token, then store it
      const searchParams = request.nextUrl.searchParams

      const callbackOAuthToken = searchParams.get("oauth_token")
      const oAuthVerifier = searchParams.get("oauth_verifier")
      const oAuthToken = cookieStore.get("oAuthToken")?.value as string
      const oAuthTokenSecret = cookieStore.get("oAuthTokenSecret")?.value as string

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

      const tokenExchangeResponse = await fetch(`https://www.zotero.org/oauth/access?oauth_token=${oAuthToken}`, {
        headers: oauth.toHeader(
          oauth.authorize(tokenExchangeConfig, {
            public: oAuthToken,
            secret: oAuthTokenSecret,
          }),
        ),
        method: "post",
      })

      const tokenExchangeData: string = await tokenExchangeResponse.text()
      const keyValuePairs = tokenExchangeData.split("&")

      const userData: { [key: string]: string } = {}

      keyValuePairs.forEach(pair => {
        const [key, value] = pair.split("=")
        userData[key] = value
      })

      try {
        // const username = userData["username"]
        const userId = userData["userID"]
        const userAPIKey = userData["oauth_token_secret"]

        if (userAPIKey) {
          const { error } = await supabase
            .from("profiles")
            .update({ zotero_oauth_state: 2, zotero_userId: userId, zotero_api_key: userAPIKey })
            .eq("id", user?.id)

          if (error) {
            console.error("Error storing user ID and api key", error)
          }
        }
        // TODO: Redirect back to /project
        return NextResponse.redirect(`${origin}/project`)
      } catch (e) {
        console.error(e)
      }
    }
  }
}
