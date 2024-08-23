import { SupabaseClient } from "@supabase/supabase-js"

import { Database, TableName } from "@/models"

import { DocumentController } from "./controllers/document-controller"
import { JournalController } from "./controllers/journal-controller"
import { ProjectController } from "./controllers/project-controller"

export const createSupabaseApiClient = (supabase: SupabaseClient<Database>) => {
  return {
    document: new DocumentController(supabase, TableName.DOCUMENTS),
    journal: new JournalController(supabase, TableName.JOURNALS),
    project: new ProjectController(supabase, TableName.PROJECTS),
  }
}
