"use server"

import { revalidatePath } from "next/cache"

import { createSupabaseApiClient } from "@/utils/supabase/api"
import { createServerClient } from "@/utils/supabase/server"

export async function deleteProjectAction(projectId: number) {
  const supabase = createServerClient()
  const apiClient = createSupabaseApiClient(supabase)

  await apiClient.project.deleteProject(projectId)

  revalidatePath("/dashboard")
}
