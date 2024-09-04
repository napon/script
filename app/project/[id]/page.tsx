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
    <div className="flex h-screen w-screen flex-col">
      <nav className="sticky top-0 z-50 flex h-16 w-full justify-center border-b bg-white">
        <div className="w-full max-w-4xl items-center justify-between p-3 text-sm">
          <AuthButton />
        </div>
      </nav>
      <div className="h-full flex-1 overflow-y-scroll">
        <ResizablePanelGroup direction="horizontal" className="border">
          <ResizablePanel defaultSize={25} className="border p-1">
            <LeftBar projectId={project.id} />
          </ResizablePanel>
          <ResizablePanel defaultSize={50} className="flex flex-col border p-1">
            <div className="flex-1 overflow-y-scroll">
              <DocumentColumn projectId={project.id} />
            </div>
          </ResizablePanel>
          <ResizablePanel defaultSize={25} className="border p-1">
            <RightBar />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  )
}

export default ProjectPage
