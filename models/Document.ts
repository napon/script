import { JSONContent } from "@tiptap/react"

export type ProjectDocument = {
  id: string
  ownerId: string
  documentContent: DocumentContent[]
  resourceFolder: string
  createdDate: string
  updatedDate: string
}

export type DocumentContent = {
  id: string
  name: string
  data: JSONContent
}
