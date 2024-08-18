"use server"

import { redirect } from "next/navigation"

import { Journal } from "@/models"
import { createApiClient } from "@/utils/supabase/api"

export async function createProjectAction(newTitle: string, targetJournal?: Journal) {
  const apiClient = createApiClient()

  const project = await apiClient.project.createProject(newTitle)
  const document = await apiClient.document.createDocument(project.id, targetJournal)

  redirect(`/project/${project.id}`)
}
