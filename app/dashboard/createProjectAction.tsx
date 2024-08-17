"use server"

import { nanoid } from "nanoid"
import { redirect } from "next/navigation"

import { DocumentContentSection, Journal, TableName } from "@/models"
import { createClient } from "@/utils/supabase/server"

export async function createProjectAction(newTitle: string, targetJournal?: Journal) {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error("User not authenticated")
  }

  const { data: project, error } = await supabase
    .from(TableName.PROJECTS)
    .insert({ title: newTitle, owner_id: user?.id })
    .select()
    .single()

  if (error) {
    throw new Error("Error creating project: " + error.message)
  }

  await createNewDocument(user.id, project.id, targetJournal)
  redirect(`/project/${project.id}`)
}

const defaultDocumentContentSectionNames = [
  "Abstract",
  "Introduction",
  "Methods",
  "Results",
  "Discussion",
  "Materials",
  "References",
]

const createNewDocument = async (userId: string, projectId: number, journal?: Journal): Promise<void> => {
  const supabase = createClient()
  const documentContentSections: DocumentContentSection[] = generateDocumentContentSections(journal)

  await supabase
    .from(TableName.DOCUMENTS)
    .insert({ project_id: projectId, owner_id: userId, content: { sections: documentContentSections } })
    .throwOnError()
}

const generateDocumentContentSections = (journal?: Journal): DocumentContentSection[] => {
  const sectionNames = !!journal ? journal.sections : defaultDocumentContentSectionNames

  return sectionNames.map(name => {
    return {
      id: nanoid(10),
      name: name,
      data: {
        type: "doc",
        content: [],
      },
    }
  })
}
