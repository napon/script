import { ProjectDocument } from "./Document"
import { Image } from "./Image"

export type Project = {
  id: string
  images: Image[]
  document: ProjectDocument
  additionalData?: Record<string, unknown>
}
