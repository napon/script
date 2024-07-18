import { JSONContent } from "@tiptap/react"

import { DocumentContent } from "@/models"

const dummyDocumentContent: DocumentContent = {
  authors: [],
  keywords: [],
  sections: [
    {
      id: "content1",
      name: "Abstract",
      data: {
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: "Example ",
              },
              {
                type: "text",
                marks: [
                  {
                    type: "bold",
                  },
                ],
                text: "Text",
              },
            ],
          },
        ],
      },
    },
    {
      id: "content2",
      name: "Section",
      data: {
        type: "doc",
        content: [
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: "Example ",
              },
              {
                type: "text",
                marks: [
                  {
                    type: "bold",
                  },
                ],
                text: "Text",
              },
            ],
          },
        ],
      },
    },
  ],
}

export const getDummyDocumentContent = (): DocumentContent => dummyDocumentContent
export const updateDummyDocumentContent = (id: string, jsonContent: JSONContent) => {
  const content = dummyDocumentContent.sections.find(c => c.id == id)
  if (!!content) {
    content.data = jsonContent
  }
}
