"use server"

import { revalidatePath } from "next/cache"

import { createApiClient } from "@/utils/supabase/api"
import { createClient } from "@/utils/supabase/server"

export async function deleteProjectAction(projectId: number) {
  const supabase = createClient()
  const apiClient = createApiClient(supabase)

  await apiClient.project.deleteProject(projectId)

  revalidatePath("/dashboard")
}
