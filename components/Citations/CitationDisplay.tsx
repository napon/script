"use client"

import { useEffect, useState } from "react"

import { fetchZoteroCitationsAction } from "@/app/zotero/fetchZoteroCitationsAction"
import { useCitationStore } from "@/store/useCitationStore"

import { Button } from "../ui/button"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "../ui/resizable"
import IntegrateZotero from "./IntegrateZotero"

export default function CitationDisplay({
  projectId,
  integratedZotero,
  initialCitations,
}: {
  projectId: number
  integratedZotero: boolean
  initialCitations: CitationWithAuthor[]
}) {
  const { citations, setCitations } = useCitationStore()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setCitations(initialCitations)
  }, [])

  const handleClick = async () => {
    if (!window.location.href.includes("rsc")) {
      setLoading(true)
      const updatedCitations = await fetchZoteroCitationsAction(projectId)
      setCitations(updatedCitations)
      setLoading(false)
    }
  }

  return (
    <div className="m-0 p-0">
      {integratedZotero ? (
        <div className="flex h-full flex-col overflow-y-scroll">
          <div className="bg-gray-200">
            <ResizablePanelGroup direction="horizontal">
              <ResizablePanel defaultSize={50} className="text-center">
                <p>Title</p>
              </ResizablePanel>
              <ResizablePanel defaultSize={50} className="text-center">
                <p>Creator</p>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
          <div className="mb-2 flex flex-1 flex-col">
            <ul className="menu m-0 flex rounded-box p-0">
              {citations?.map(citation => {
                const authorsObject: CitationAuthor[] = citation.authors
                let authorList: string = ""
                authorsObject.forEach((author: CitationAuthor, index: number) => {
                  if (index == 0) {
                    authorList = authorList + author.last_name
                  } else {
                    authorList = authorList + " and " + author.last_name
                  }
                })
                return (
                  <div key={citation.id} className="mt-1">
                    <li>
                      <a className="m-0 p-0">
                        <ResizablePanelGroup direction="horizontal">
                          <ResizablePanel defaultSize={50}>
                            <p className="truncate pr-1">{citation.title}</p>
                          </ResizablePanel>
                          <ResizableHandle></ResizableHandle>
                          <ResizablePanel defaultSize={50}>
                            <p className="truncate pl-1">{authorList}</p>
                          </ResizablePanel>
                        </ResizablePanelGroup>
                      </a>
                    </li>
                  </div>
                )
              })}
            </ul>
          </div>
          <Button onClick={handleClick} className="mt-auto h-1/6" disabled={loading}>
            Update Citations
          </Button>
        </div>
      ) : (
        <IntegrateZotero projectId={projectId} />
      )}
    </div>
  )
}
