import { nanoid } from "nanoid"

import { BaseController } from "./base-controller"

import { Document, DocumentContentSection, DocumentInsertDto } from "@/models"

export class DocumentController extends BaseController {
  private defaultDocumentContentSectionNames: string[] = [
    "Abstract",
    "Introduction",
    "Methods",
    "Results",
    "Discussion",
    "Materials",
    "References",
  ]

  public async getDocumentById(id: number | string) {
    return this.get<Document>("id", id)
  }

  public async getDocumentByProjectId(projectId: number | string) {
    return this.get<Document>("project_id", projectId)
  }

  public async createDocument(projectId: number, journal?: Journal) {
    const user = await this.getUser()
    const data: DocumentInsertDto = {
      project_id: projectId,
      owner_id: user.id,
      content: { sections: this.generateDocumentContentSections(journal) },
    }
    return this.create<Document>(data)
  }

  public async updateDocument(id: number | string, data: DocumentInsertDto) {
    return this.update<Document>(id, data)
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
