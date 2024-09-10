// import { Button } from "@/components/ui/button"
import { FigureNavigationPane } from "@/components/Project/Figure/FigureNavigationPane"
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { createSupabaseApiClient } from "@/utils/supabase/api"
import { createServerClient } from "@/utils/supabase/server"

import { FigurePreviewPane } from "../../../components/Project/Figure/FigurePreviewPane"

type Props = { projectId: number }

export async function RightBar({ projectId }: Props) {
  const supabase = createServerClient()
  const apiClient = createSupabaseApiClient(supabase)

  const figures = await apiClient.figureGroup.getFigureGroupWithChildrenForProject(projectId)

  return (
    <ResizablePanelGroup direction="vertical" className="space-y-1">
      <ResizablePanel defaultSize={5}>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={25} className="border p-1">
            <div>Export</div>
          </ResizablePanel>
          <ResizablePanel defaultSize={75} className="border p-1">
            <div>Target Journal</div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizablePanel defaultSize={42.5} className="border p-1">
        <FigureNavigationPane figureGroupArray={figures} projectId={projectId} />
      </ResizablePanel>
      <ResizablePanel defaultSize={42.5} className="border p-1">
        <FigurePreviewPane />
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
