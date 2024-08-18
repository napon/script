import React, { FunctionComponent, useState } from "react"

import { Editor, JSONContent } from "@tiptap/react"

import { TextEditor, TextEditorProps } from "./TextEditor"

type DocumentContentSectionProps = Pick<TextEditorProps, "id" | "content"> & {
  name: string
  activeSectionId: string
  onFocus?: () => void
  onUpdate: (content: JSONContent) => void
}

export const DocumentContentSection: FunctionComponent<DocumentContentSectionProps> = ({
  id,
  name,
  content,
  activeSectionId,
  onFocus,
  onUpdate,
}) => {
  const [documentContent, setDocumentContent] = useState<JSONContent>(content)

  const onClick = (editor: Editor | null) => {
    !!onFocus && onFocus()
    if (editor !== null && !editor.isFocused) {
      editor.commands.focus()
    }
  }

  const onUpdateSection = (editor: Editor | null) => {
    if (editor !== null) {
      const content = editor.getJSON()
      onUpdate(content)
      setDocumentContent(content)
    }
  }

  return (
    <div className="flex h-fit w-full flex-col">
      <h4 className="mb-2">{name}</h4>
      <TextEditor
        id={id}
        content={documentContent}
        onClick={onClick}
        onUpdate={onUpdateSection}
        shouldRenderContentEditor={activeSectionId == id}
      />
    </div>
  )
}
