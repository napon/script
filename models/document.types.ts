import { JSONContent } from "@tiptap/react"

export type DocumentContent = {
  authors: Author[]
  keywords: string[]
  sections: DocumentContentSection[]
}

export type Author = {
  order: number
  name: string
  email: string
  address: string
  phone_number: string
}

export type DocumentContentSection = {
  id: string
  name: string
  data: JSONContent
}
