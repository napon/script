import { FunctionComponent } from "react"

import { redirect } from "next/navigation"

import { DocumentColumn } from "./document-column"
import { LeftBar } from "./left-bar"
import { RightBar } from "./right-bar"

import AuthButton from "@/components/AuthButton"
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { createApiClient } from "@/utils/supabase/api"
import { createClient } from "@/utils/supabase/server"

type Props = { params: { id: string } }

const ProjectPage: FunctionComponent<Props> = async ({ params: { id: projectId } }) => {
  const supabase = createClient()
  const apiClient = createApiClient(supabase)
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return redirect("/login")
  }

  const project = await apiClient.project.getProjectById(projectId)

  if (!project) {
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
          <DocumentColumn projectId={project.id} />
        </ResizablePanel>
        <ResizablePanel defaultSize={25} className="border p-1">
          <RightBar />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}

export default ProjectPage
