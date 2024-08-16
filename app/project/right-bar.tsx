import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"

export function RightBar() {
  return (
    <ResizablePanelGroup direction="vertical" className="space-y-1">
      <ResizablePanel className="border p-1">
        <div>Citations</div>
      </ResizablePanel>
      <ResizablePanel className="border p-1">
        <div>Figures Import</div>
      </ResizablePanel>
      <ResizablePanel className="border p-1">
        <div>Figures Preview</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
