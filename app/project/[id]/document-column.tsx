"use client"

import { FunctionComponent, useEffect, useState } from "react"

import { DocumentContentEditor } from "@/components/DocumentContentEditor"
import { useDebounce } from "@/lib/hooks"
import { Document } from "@/models"
import { createClientComponentClient, createSupabaseApiClient } from "@/utils/supabase"

type Props = { projectId: number }

export const DocumentColumn: FunctionComponent<Props> = ({ projectId }) => {
  const supabase = createClientComponentClient()
  const apiClient = createSupabaseApiClient(supabase)
  const [document, setDocument] = useState<Document | null>(null)

  useEffect(() => {
    apiClient.document.getDocumentByProjectId(projectId).then(setDocument)
  }, [])

  const debouncedUpdateDocument = useDebounce(() => {
    if (!!document) {
      apiClient.document.updateDocument(document.id, document)
    }
  }, 500)

  const onUpdateDocument = (data: Document) => {
    setDocument(data)
    debouncedUpdateDocument()
  }

  return (
    <DocumentContentEditor
      document={document as Document}
      onUpdate={(updatedDocument: Document) => onUpdateDocument(updatedDocument)}
    />
  )
}
