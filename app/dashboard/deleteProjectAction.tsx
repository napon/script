"use server"

import { revalidatePath } from "next/cache"

import { createApiClient } from "@/utils/supabase/api"

export async function deleteProjectAction(projectId: number) {
  const apiClient = createApiClient()

  await apiClient.project.deleteProject(projectId)

  revalidatePath("/dashboard")
}
