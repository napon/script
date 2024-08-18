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

  async getDocumentById(id: number | string) {
    return this.get<Document>("id", id)
  }

  async getDocumentByProjectId(projectId: number | string) {
    return this.get<Document>("project_id", projectId)
  }

  async createDocument(projectId: number, journal?: Journal) {
    const user = await this.getUser()
    const documentContentSections = this.generateDocumentContentSections(journal)
    const data: DocumentInsertDto = {
      project_id: projectId,
      owner_id: user.id,
      content: { sections: documentContentSections },
    }

    return this.create<Document>(data)
  }

  async updateDocument(id: number | string, data: DocumentInsertDto) {
    return this.update<Document>(id, data)
  }

  private generateDocumentContentSections(journal?: Journal): DocumentContentSection[] {
    const sectionNames = !!journal ? journal.sections : this.defaultDocumentContentSectionNames

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
}
