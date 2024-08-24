"use client"

import IntegrateZotero from "./IntegrateZotero"

export default function CitationDisplay({
  userId,
  integratedZotero,
  citations,
}: {
  userId: string | undefined
  integratedZotero: boolean
  citations: Citation[]
}) {
  console.log(userId)
  return (
    <div>
      {integratedZotero ? (
        // Display list of citations
        <ul className="list-none">
          {citations?.map(citation => {
            return <li key={citation.id}>{citation.title}</li>
          })}
        </ul>
      ) : (
        // Display button
        <IntegrateZotero />
      )}
    </div>
  )
}
