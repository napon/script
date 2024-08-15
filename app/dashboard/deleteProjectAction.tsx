"use server"

import { revalidatePath } from "next/cache"

import { createClient } from "@/utils/supabase/server"

export async function deleteProjectAction(projectId: number) {
  const supabase = createClient()

  await supabase.from("projects").delete().eq("id", projectId)

  revalidatePath("/dashboard")
}
