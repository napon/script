import { redirect } from "next/navigation"
import { useRouter } from "next/router"

import { LeftBar } from "./left-bar"
import { RightBar } from "./right-bar"

import AuthButton from "@/components/AuthButton"
import { DocumentContentEditor } from "@/components/DocumentContentEditor"
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { TableName } from "@/models"
import { createClient } from "@/utils/supabase/server"

export default async function ProjectPage() {
  const supabase = createClient()
  const {
    query: { id },
  } = useRouter()

  if (!id) {
    return redirect("/dashboard")
  }

  const { data: project, error } = await supabase.from(TableName.PROJECTS).select().eq("id", id).single<Project>()

  if (!project || error) {
    return redirect("/dashboard")
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
          <DocumentContentEditor projectId={project?.id} />
        </ResizablePanel>
        <ResizablePanel defaultSize={25} className="border p-1">
          <RightBar />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
