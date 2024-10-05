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
          <table className="table table-pin-rows table-xs mb-1 bg-transparent">
            <thead>
              <tr className="border-opacity-50 bg-gray-300 text-black">
                <th>Title</th>
                <th>Authors</th>
              </tr>
            </thead>
            <tbody>
              {citations?.map(citation => {
                const authorsObject: CitationAuthor[] = citation.authors
                const authorList = authorsObject
                  .map((author, index) =>
                    index === 0 ? author.last_name : ` and ${author.last_name}`,
                  )
                  .join("")

                return (
                  <tr key={citation.id} className="border-none odd:bg-white even:bg-gray-100">
                    <td>{citation.title}</td>
                    <td>{authorList}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
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
