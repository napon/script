import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"

export function LeftBar() {
  return (
    <ResizablePanelGroup direction="vertical" className="space-y-1">
      <ResizablePanel defaultSize={40} className="border p-1">
        <div>Authors</div>
      </ResizablePanel>
      <ResizablePanel defaultSize={40} className="border p-1">
        <div>Keywords</div>
      </ResizablePanel>
      <ResizablePanel defaultSize={10} className="border p-1">
        <div>Target Journal</div>
      </ResizablePanel>
      <ResizablePanel defaultSize={10} className="border p-1">
        <div>Export Button</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
