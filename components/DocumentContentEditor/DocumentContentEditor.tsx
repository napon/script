"use client"

import React, { FunctionComponent, useState } from "react"

import { DocumentContentSection } from "./DocumentContentSection"

import { DocumentContent } from "@/models"

type DocumentContentEditorProps = {
  documentContent: DocumentContent
}

export const DocumentContentEditor: FunctionComponent<DocumentContentEditorProps> = ({ documentContent }) => {
  const [activeSectionId, setActiveSectionId] = useState<string>("")

  const onFocusSection = (sectionId: string) => {
    if (activeSectionId !== sectionId) {
      setActiveSectionId(sectionId)
    }
  }

  return (
    <div className="flex size-full flex-1 flex-col gap-6">
      {documentContent.sections.map(section => (
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
