import { SupabaseClient } from "@supabase/supabase-js"

import { CitationAuthorInsertDto, Database, TableName } from "@/models"

import { BaseController } from "./base-controller"

interface ZoteroAuthor {
  creatorType: string
  firstName: string
  lastName: string
}

export class AuthorController extends BaseController<TableName.CITATION_AUTHORS> {
  constructor(supabase: SupabaseClient<Database>) {
    super(supabase, TableName.CITATION_AUTHORS)
  }

  public async createAuthor(authors: ZoteroAuthor[], citation_id: number) {
    const createdData: Promise<CitationAuthor>[] = []

    for (const author of authors) {
      const data: CitationAuthorInsertDto = {
        citation_id: citation_id,
        creator_type: author.creatorType,
        first_name: author.firstName,
        last_name: author.lastName,
      }
      createdData.push(this.create(data))
    }

    return createdData
  }

  public async getAllAuthorsForCitation(citation_id: string | number) {
    return this.getAllForQuery("citation_id", citation_id)
  }
}
