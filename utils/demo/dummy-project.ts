import { JSONContent } from "@tiptap/react"

import { Project } from "@/models"

const dummyProject: Project = {
  id: "projectId",
  images: [],
  document: {
    id: "documentId",
    ownerId: "ownerId",
    documentContent: [
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
    resourceFolder: "",
    createdDate: "",
    updatedDate: "",
  },
}

export const getDummyProject = (): Project => dummyProject
export const updateDummyDocument = (id: string, jsonContent: JSONContent) => {
  const content = dummyProject.document.documentContent.find(c => c.id == id)
  if (!!content) {
    content.data = jsonContent
  }
}
