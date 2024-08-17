"use client"

import React, { FunctionComponent, useState } from "react"

import { DocumentContentSection } from "./DocumentContentSection"

import { Document, TableName } from "@/models"
import { createClient } from "@/utils/supabase/server"

type DocumentContentEditorProps = {
  projectId: number
}

export const DocumentContentEditor: FunctionComponent<DocumentContentEditorProps> = async ({ projectId }) => {
  const supabase = createClient()
  const [activeSectionId, setActiveSectionId] = useState<string>("")

  const { data: document } = await supabase
    .from(TableName.DOCUMENTS)
    .select()
    .eq("project_id", projectId)
    .returns<Document>()
    .throwOnError()

  const onFocusSection = (sectionId: string) => {
    if (activeSectionId !== sectionId) {
      setActiveSectionId(sectionId)
    }
  }

  return (
    <div className="flex size-full flex-1 flex-col gap-6">
      {document?.content.sections.map(section => (
        <DocumentContentSection
          key={section.id}
          id={section.id}
          name={section.name}
          content={section.data}
          activeSectionId={activeSectionId}
          onFocus={() => onFocusSection(section.id)}
        />
      ))}
    </div>
  )
}
