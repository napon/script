import React, { FunctionComponent, useState } from "react"

import { Editor, JSONContent } from "@tiptap/react"

import { TextEditor, TextEditorProps } from "./TextEditor"

import { updateDummyDocument } from "@/utils/demo/dummy-project"

type DocumentContentSectionProps = Pick<TextEditorProps, "id" | "content"> & {
  name: string
  activeSectionId: string
  onFocus?: () => void
}

export const DocumentContentSection: FunctionComponent<DocumentContentSectionProps> = ({
  id,
  name,
  content,
  activeSectionId,
  onFocus,
}) => {
  const [documentContent, setDocumentContent] = useState<JSONContent>(content)

  const onClick = (editor: Editor | null) => {
    !!onFocus && onFocus()
    if (editor !== null && !editor.isFocused) {
      editor.commands.focus()
    }
  }

  const onUpdate = (editor: Editor | null) => {
    if (editor !== null) {
      const content = editor.getJSON()
      // call api to update document
      updateDummyDocument(id, content)
      setDocumentContent(content)
    }
  }

  return (
    <div className="mb-5 flex h-fit w-full flex-col">
      <h4 className="mb-2">{name}</h4>
      <TextEditor
        id={id}
        content={documentContent}
        onClick={onClick}
        onUpdate={onUpdate}
        shouldRenderContentEditor={activeSectionId == id}
      />
    </div>
  )
}
