import { redirect } from "next/navigation"

import { ProjectList } from "./project-list"

import AuthButton from "@/components/AuthButton"
import { CreateProject } from "@/components/Dashboard/CreateProject"
import { createServerClient, createSupabaseApiClient } from "@/utils/supabase"

export default async function ProtectedPage() {
  const supabase = createServerClient()
  const apiClient = createSupabaseApiClient(supabase)

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return redirect("/login")
  }

  const projectData = await apiClient.project.getAllProjectsForCurrentUser()
  const journalData = await apiClient.journal.getAllJournals()

  return (
    <div className="flex w-full flex-1 flex-col items-center">
      <div className="w-full">
        <nav className="flex h-16 w-full justify-center border-b border-b-foreground/10">
          <div className="flex w-full max-w-4xl items-center justify-between p-3 text-sm">
            <AuthButton />
          </div>
        </nav>

        <div className="flex h-44 w-full items-center justify-center bg-secondary">
          <CreateProject journals={journalData} />
        </div>

        <div>
          <ProjectList projects={projectData} />
        </div>
      </div>
    </div>
  )
}
