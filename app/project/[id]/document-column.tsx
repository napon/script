"use client"

import { FunctionComponent, useEffect, useState } from "react"

import { DocumentContentEditor } from "@/components/DocumentContentEditor"
import { Document } from "@/models"
import { createApiClient } from "@/utils/supabase/api"
import { createClient } from "@/utils/supabase/client"

type Props = { projectId: number }

export const DocumentColumn: FunctionComponent<Props> = ({ projectId }) => {
  const supabase = createClient()
  const apiClient = createApiClient(supabase)
  const [document, setDocument] = useState<Document | null>(null)

  useEffect(() => {
    apiClient.document.getDocumentByProjectId(projectId).then(setDocument)
  }, [])

  const onUpdateDocument = async (data: Document) => {
    await apiClient.document.updateDocument(data.id, data)
  }

  return (
    <DocumentContentEditor
      document={document as Document}
      onUpdate={(updatedDocument: Document) => onUpdateDocument(updatedDocument)}
    />
  )
}
