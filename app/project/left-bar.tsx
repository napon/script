import CitationDisplay from "@/components/Citations/CitationDisplay"
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { createSupabaseApiClient } from "@/utils/supabase/api"
import { createServerClient } from "@/utils/supabase/server"

interface ZoteroObject {
  key: string
  version: number
  library: object
  links: object
  meta: object
  data: object
}

type Props = { projectId: number }

export async function LeftBar({ projectId }: Props) {
  const supabase = createServerClient()
  const apiClient = createSupabaseApiClient(supabase)

  const citations = await apiClient.citation.getAllCitationsForCurrentUser()

  return (
    <ResizablePanelGroup direction="vertical" className="space-y-1">
      <ResizablePanel defaultSize={30} className="border p-1">
        <div>Authors</div>
      </ResizablePanel>
      <ResizablePanel defaultSize={15} className="border p-1">
        <div>Keywords</div>
      </ResizablePanel>
      <ResizablePanel defaultSize={30} className="border p-1">
        <CitationDisplay
          projectId={projectId}
          integratedZotero={false}
          initialCitations={citations}
        ></CitationDisplay>
      </ResizablePanel>
      <ResizablePanel defaultSize={25} className="border p-1">
        <div>Notes</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
