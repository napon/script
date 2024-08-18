import { FunctionComponent } from "react"

import { redirect } from "next/navigation"

import { LeftBar } from "./left-bar"
import { RightBar } from "./right-bar"

import AuthButton from "@/components/AuthButton"
import { DocumentContentEditor } from "@/components/DocumentContentEditor"
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { createApiClient } from "@/utils/supabase/api"
import { createClient } from "@/utils/supabase/server"

type Props = { params: { id: string } }

const ProjectPage: FunctionComponent<Props> = async ({ params: { id: projectId } }) => {
  const apiClient = createApiClient()
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return redirect("/login")
  }

  const project = await apiClient.project.getProjectById(projectId)
  const document = await apiClient.document.getDocumentByProjectId(projectId)

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
          <DocumentContentEditor document={document} />
        </ResizablePanel>
        <ResizablePanel defaultSize={25} className="border p-1">
          <RightBar />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}

export default ProjectPage
