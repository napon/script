import { DocumentController } from "./controllers/document-controller"
import { JournalController } from "./controllers/journal-controller"
import { ProjectController } from "./controllers/project-controller"

import { TableName } from "@/models"

export const createApiClient = () => {
  return {
    document: new DocumentController(TableName.DOCUMENTS),
    journal: new JournalController(TableName.JOURNALS),
    project: new ProjectController(TableName.PROJECTS),
  }
}
