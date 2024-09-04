"use client"

import { fetchZoteroCitationsAction } from "@/app/zotero/fetchZoteroCitationsAction"

import { Button } from "../ui/button"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "../ui/resizable"
import IntegrateZotero from "./IntegrateZotero"
import { useEffect } from "react"

export default function CitationDisplay({
  projectId,
  integratedZotero,
  citations,
}: {
  projectId: number
  integratedZotero: boolean
  citations: CitationWithAuthor[]
}) {
  const handleClick = () => {
    if (!window.location.href.includes("rsc")) {
      fetchZoteroCitationsAction(projectId)
    }
  }

  return (
    <div className="m-0 p-0">
      {integratedZotero ? (
        <div className="flex h-full flex-col">
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
          <div className="flex flex-1 flex-col">
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
          <Button onClick={handleClick} className="mt-auto h-1/6">
            Update Citations
          </Button>
        </div>
      ) : (
        <IntegrateZotero projectId={projectId} />
      )}
    </div>
  )
}
