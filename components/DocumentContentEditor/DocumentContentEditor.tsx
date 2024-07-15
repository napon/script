"use client"

import React, { FunctionComponent, useState } from "react"

import { DocumentContentSection } from "./DocumentContentSection"

import { ProjectDocument } from "@/models/Document"

type DocumentContentEditorProps = {
  document: ProjectDocument
}

export const DocumentContentEditor: FunctionComponent<DocumentContentEditorProps> = ({ document }) => {
  const [activeSectionId, setActiveSectionId] = useState<string>("")

  const onFocusSection = (sectionId: string) => {
    if (activeSectionId !== sectionId) {
      setActiveSectionId(sectionId)
    }
  }

  return (
    <div className="flex size-full flex-1 flex-col gap-6">
      {document.documentContent.map(documentContent => (
        <DocumentContentSection
          key={documentContent.id}
          id={documentContent.id}
          name={documentContent.name}
          content={documentContent.data}
          activeSectionId={activeSectionId}
          onFocus={() => onFocusSection(documentContent.id)}
        />
      ))}
    </div>
  )
}
