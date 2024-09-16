import { FunctionComponent } from "react"
import { redirect } from "next/navigation"

import AuthButton from "@/components/AuthButton"
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { createSupabaseApiClient } from "@/utils/supabase/api"
import { createServerClient } from "@/utils/supabase/server"

import { DocumentColumn } from "./document-column"
import { LeftBar } from "./left-bar"
import { RightBar } from "./right-bar"

type Props = { params: { id: string } }

const ProjectPage: FunctionComponent<Props> = async ({ params: { id: projectId } }) => {
  const supabase = createServerClient()
  const apiClient = createSupabaseApiClient(supabase)

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
    <div className="flex h-svh w-full flex-col">
      <nav className="flex h-16 w-full justify-center border-b border-b-foreground/10">
        <div className="flex w-full max-w-4xl grow items-center justify-between p-3 text-sm">
          <AuthButton />
        </div>
      </nav>
      <ResizablePanelGroup direction="horizontal" className="border">
        <ResizablePanel defaultSize={25} className="border p-1">
          <LeftBar projectId={project.id} />
        </ResizablePanel>
        <ResizablePanel defaultSize={50} className="border p-1" style={{ overflowY: "scroll" }}>
          <DocumentColumn projectId={project.id} />
        </ResizablePanel>
        <ResizablePanel defaultSize={25} className="border p-1">
          <RightBar projectId={project.id} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}

export default ProjectPage
