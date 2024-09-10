import { nanoid } from "nanoid"
import { revalidatePath } from "next/cache"
import { NextRequest, NextResponse } from "next/server"

import { SupabaseClient, User } from "@supabase/supabase-js"

import { getFileExtension, isStringValidIntegerIdentifier } from "@/lib/utils"
import { Database } from "@/models"
import { createServerClient } from "@/utils/supabase/server"

const validateUploadRequirements = (user: User | null, file: File, figureGroupId: any) => {
  if (!user) {
    throw new Error("User not logged in")
  }
  if (!file) {
    throw new Error("No file provided")
  }
  if (!figureGroupId || !isStringValidIntegerIdentifier(figureGroupId)) {
    throw new Error("No figureGroupId provided")
  }
}

const validateFigureGroupBelongsToUser = async (
  supabase: SupabaseClient<Database>,
  user: User,
  figureGroupId: number,
) => {
  const { data: figureGroup, error: listingError } = await supabase
    .from("figure_groups")
    .select("owner_id")
    .eq("id", figureGroupId)
    .maybeSingle()

  if (listingError) {
    throw listingError
  } else if (!figureGroup || figureGroup.owner_id !== user?.id) {
    throw new Error("FigureGroup does not belong to user")
  }
}

export async function POST(req: NextRequest) {
  const supabase = await createServerClient()
  const { data } = await supabase.auth.getUser()
  if (!data) {
    throw new Error("invalid user")
  }
  const user = data.user
  const formData = await req.formData()
  const file = formData.get("image") as File
  const id = formData.get("figureGroupId")
  const caption = formData.get("caption") as string
  validateUploadRequirements(user, file, id)

  const figureGroupId = parseInt(id as string)
  validateFigureGroupBelongsToUser(supabase, user!, figureGroupId)

  const generatedFileName = `${user!.id}/${nanoid(8)}.${getFileExtension(file.name)}`

  try {
    const { data: uploadResult, error: uploadError } = await supabase.storage
      .from("figure_images_bucket")
      .upload(generatedFileName, file)
    if (uploadError) {
      throw uploadError
    } else {
      const path = uploadResult.path
      const { data: urlResult } = supabase.storage.from("figure_images_bucket").getPublicUrl(path)
      const { data, error } = await supabase
        .from("figures")
        .insert({
          caption,
          figure_group_id: figureGroupId,
          url: urlResult.publicUrl,
          owner_id: user!.id,
        })
        .select()
        .single()
      if (error) {
        console.log(error.message)
        throw error
      }
      const reqPath = req.nextUrl.searchParams.get("path")
      if (reqPath) {
        revalidatePath(reqPath)
      }
      return NextResponse.json({
        url: data.url,
        fileName: generatedFileName,
        imageId: data.id,
      })
    }
  } catch (error) {
    console.log(error)
    return new Response("error", { status: 500 })
  }
}
