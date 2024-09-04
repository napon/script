import { redirect } from "next/navigation"

import CitationDisplay from "@/components/Citations/CitationDisplay"
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { createSupabaseApiClient } from "@/utils/supabase/api"
import { createServerClient } from "@/utils/supabase/server"

export async function LeftBar({ projectId }: { projectId: number }) {
  const supabase = createServerClient()
  const apiClient = createSupabaseApiClient(supabase)

  const profile = await apiClient.profile.getUserProfile()

  if (!profile) {
    return redirect("/login")
  }

  const integratedZotero = profile.zotero_oauth_state == 2
  let citations: CitationWithAuthor[] = []

  if (integratedZotero) {
    citations = await apiClient.citation.getAllCitationsForCurrentUser()
  }

  return (
    <ResizablePanelGroup direction="vertical" className="space-y-1">
      <ResizablePanel defaultSize={30} className="border p-1">
        <div>Authors</div>
      </ResizablePanel>
      <ResizablePanel defaultSize={15} className="border p-1">
        <div>Keywords</div>
      </ResizablePanel>
      <ResizablePanel defaultSize={30} className="flex border p-1">
        <CitationDisplay
          projectId={projectId}
          integratedZotero={integratedZotero}
          initialCitations={citations}
        ></CitationDisplay>
      </ResizablePanel>
      <ResizablePanel defaultSize={25} className="border p-1">
        <div>Notes</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
