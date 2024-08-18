import { DocumentController } from "./controllers/document-controller"
import { ProjectController } from "./controllers/project-controller"

import { TableName } from "@/models"

export const createApiClient = () => {
  return {
    project: new ProjectController(TableName.PROJECTS),
    document: new DocumentController(TableName.DOCUMENTS),
  }
}
