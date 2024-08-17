import { redirect } from "next/navigation"

import { LeftBar } from "./left-bar"
import { RightBar } from "./right-bar"

import AuthButton from "@/components/AuthButton"
import { DocumentContentEditor } from "@/components/DocumentContentEditor"
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { getDummyDocumentContent } from "@/utils/demo/dummy-project"
import { createClient } from "@/utils/supabase/server"

export default async function ProjectPage() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return redirect("/login")
  }

  return (
    <div className="size-full">
      <nav className="flex h-16 w-full justify-center border-b border-b-foreground/10">
        <div className="flex w-full max-w-4xl items-center justify-between p-3 text-sm">
          <AuthButton />
        </div>
      </nav>
      <ResizablePanelGroup direction="horizontal" className="border">
        <ResizablePanel defaultSize={25} className="border p-1">
          <LeftBar />
        </ResizablePanel>
        <ResizablePanel defaultSize={50} className="border p-1">
          <DocumentContentEditor documentContent={getDummyDocumentContent()} />
        </ResizablePanel>
        <ResizablePanel defaultSize={25} className="border p-1">
          <RightBar />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
