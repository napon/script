import { SupabaseClient } from "@supabase/supabase-js"

import { Database } from "@/models"

import {
  DocumentController,
  FigureController,
  FigureGroupController,
  JournalController,
  ProjectController,
} from "./controllers"
import { StorageController } from "./controllers/storage-controller"

export const createSupabaseApiClient = (supabase: SupabaseClient<Database>) => {
  return {
    document: new DocumentController(supabase),
    journal: new JournalController(supabase),
    project: new ProjectController(supabase),
    figureGroup: new FigureGroupController(supabase),
    figure: new FigureController(supabase),
    storage: new StorageController(supabase),
  }
}
