import { SupabaseClient } from "@supabase/supabase-js"

import { Database, TableName } from "@/models"

import { BaseController } from "./base-controller"

export class JournalController extends BaseController<TableName.JOURNALS> {
  constructor(supabase: SupabaseClient<Database>) {
    super(supabase, TableName.JOURNALS)
  }

  public async getAllJournals() {
    return this.getAll()
  }
}
