"use server"

import { revalidatePath } from "next/cache"

import { createServerClient, createSupabaseApiClient } from "@/utils/supabase"

export async function deleteProjectAction(projectId: number) {
  const supabase = createServerClient()
  const apiClient = createSupabaseApiClient(supabase)

  await apiClient.project.deleteProject(projectId)

  revalidatePath("/dashboard")
}
