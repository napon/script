import { SupabaseClient } from "@supabase/supabase-js"

import { Database } from "@/models"

import { DocumentController, JournalController, ProjectController } from "./controllers"

export const createSupabaseApiClient = (supabase: SupabaseClient<Database>) => {
  return {
    document: new DocumentController(supabase),
    journal: new JournalController(supabase),
    project: new ProjectController(supabase),
  }
}
