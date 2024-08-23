"use client"

import React, { FunctionComponent, useState } from "react"

import { JSONContent } from "@tiptap/react"

import { DocumentContentSection } from "./DocumentContentSection"

import { Document } from "@/models"

type DocumentContentEditorProps = {
  document: Document
  onUpdate: (document: Document) => void
}

export const DocumentContentEditor: FunctionComponent<DocumentContentEditorProps> = ({ document, onUpdate }) => {
  const [activeSectionId, setActiveSectionId] = useState<string>("")

  const onFocusSection = (sectionId: string) => {
    if (activeSectionId !== sectionId) {
      setActiveSectionId(sectionId)
    }
  }

  const onUpdateSection = (sectionId: string, content: JSONContent) => {
    const updatedDocument: Document = {
      ...document,
      content: {
        ...document.content,
        sections: document.content.sections.map(section => {
          if (section.id === sectionId) {
            return {
              ...section,
              data: content,
            }
          }
          return section
        }),
      },
    }
    onUpdate(updatedDocument)
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
          onUpdate={content => onUpdateSection(section.id, content)}
        />
      ))}
    </div>
  )
}
