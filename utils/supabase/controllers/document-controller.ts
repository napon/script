import { nanoid } from "nanoid"

import { SupabaseClient } from "@supabase/supabase-js"

import { Database, DocumentContentSection, DocumentInsertDto, TableName } from "@/models"

import { BaseController } from "./base-controller"

export class DocumentController extends BaseController<TableName.DOCUMENTS> {
  private defaultDocumentContentSectionNames: string[] = [
    "Abstract",
    "Introduction",
    "Methods",
    "Results",
    "Discussion",
    "Materials",
    "References",
  ]

  constructor(supabase: SupabaseClient<Database>) {
    super(supabase, TableName.DOCUMENTS)
  }

  public async getDocumentById(id: number | string) {
    return this.get("id", id)
  }

  public async getDocumentByProjectId(projectId: number | string) {
    return this.get("project_id", projectId)
  }

  public async createDocument(projectId: number, journal?: Journal) {
    const user = await this.getUser()
    const data: DocumentInsertDto = {
      project_id: projectId,
      owner_id: user.id,
      content: { sections: this.generateDocumentContentSections(journal) },
    }
    return this.create(data)
  }

  public async updateDocument(id: number | string, data: DocumentInsertDto) {
    return this.update(id, data)
  }

  private generateDocumentContentSections(journal?: Journal): DocumentContentSection[] {
    return (journal?.sections ?? this.defaultDocumentContentSectionNames).map(name => {
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
}
