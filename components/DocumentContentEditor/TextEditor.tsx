"use client"

import React, { FunctionComponent } from "react"

import { generateHTML } from "@tiptap/html"
import { Editor, EditorContent, JSONContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

import { cn } from "@/lib/utils"

const extensions = [StarterKit]

const proseClasses = "prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl"
const sharedClasses = "mx-auto min-h-full w-full rounded-md border p-4"

export type TextEditorProps = {
  id: string
  content: JSONContent
  minHeightPx?: number
  onClick?: (editor: Editor | null) => void
  onUpdate?: (editor: Editor | null) => void
  shouldRenderContentEditor?: boolean
}

export const TextEditor: FunctionComponent<TextEditorProps> = ({
  id,
  content,
  minHeightPx = 224,
  onClick,
  onUpdate,
  shouldRenderContentEditor = true,
}) => {
  const editor = useEditor({
    content,
    extensions,
    editorProps: {
      attributes: {
        class: cn(sharedClasses, proseClasses, "!absolute focus:outline-none"),
      },
    },
    onUpdate: ({ editor }) => !!onUpdate && onUpdate(editor as Editor),
  })

  return (
    <div
      id={id}
      style={{ minHeight: `${minHeightPx}px` }}
      className="relative flex w-auto flex-1 flex-col"
      onClick={() => !!onClick && onClick(editor)}
    >
      {shouldRenderContentEditor ? (
        <EditorContent editor={editor} />
      ) : (
        <div
          className={cn(sharedClasses, proseClasses)}
          dangerouslySetInnerHTML={{ __html: generateHTML(content, extensions) }}
        />
      )}
    </div>
  )
}
