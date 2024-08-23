"use server"

import { redirect } from "next/navigation"

import { Journal } from "@/models"
import { createSupabaseApiClient } from "@/utils/supabase/api"
import { createServerClient } from "@/utils/supabase/server"

export async function createProjectAction(newTitle: string, targetJournal?: Journal) {
  const supabase = createServerClient()
  const apiClient = createSupabaseApiClient(supabase)

  const project = await apiClient.project.createProject(newTitle)
  const _document = await apiClient.document.createDocument(project.id, targetJournal)

  redirect(`/project/${project.id}`)
}
