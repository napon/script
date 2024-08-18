// import { Button } from "@/components/ui/button"
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"

export function RightBar() {
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
        <div>Figures Import</div>
      </ResizablePanel>
      <ResizablePanel defaultSize={42.5} className="border p-1">
        <div>Figures Preview</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
