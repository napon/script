import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"

export function LeftBar() {
  return (
    <ResizablePanelGroup direction="vertical" className="space-y-1">
      <ResizablePanel defaultSize={30} className="border p-1">
        <div>Authors</div>
      </ResizablePanel>
      <ResizablePanel defaultSize={15} className="border p-1">
        <div>Keywords</div>
      </ResizablePanel>
      <ResizablePanel defaultSize={30} className="border p-1">
        <div>Citations</div>
      </ResizablePanel>
      <ResizablePanel defaultSize={25} className="border p-1">
        <div>Notes</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
