"use server"

import { redirect } from "next/navigation"

import { Journal } from "@/models"
import { createApiClient } from "@/utils/supabase/api"
import { createClient } from "@/utils/supabase/server"

export async function createProjectAction(newTitle: string, targetJournal?: Journal) {
  const supabase = createClient()
  const apiClient = createApiClient(supabase)

  const project = await apiClient.project.createProject(newTitle)
  const _document = await apiClient.document.createDocument(project.id, targetJournal)

  redirect(`/project/${project.id}`)
}
