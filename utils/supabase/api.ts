import { SupabaseClient } from "@supabase/supabase-js"

import { DocumentController } from "./controllers/document-controller"
import { JournalController } from "./controllers/journal-controller"
import { ProjectController } from "./controllers/project-controller"

import { Database, TableName } from "@/models"

export const createApiClient = (supabase: SupabaseClient<Database>) => {
  return {
    document: new DocumentController(supabase, TableName.DOCUMENTS),
    journal: new JournalController(supabase, TableName.JOURNALS),
    project: new ProjectController(supabase, TableName.PROJECTS),
  }
}
