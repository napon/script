"use client"

import React, { FunctionComponent, useState } from "react"

import { DocumentContentSection } from "./DocumentContentSection"

import { Document } from "@/models"

type DocumentContentEditorProps = {
  document: Document | null
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
