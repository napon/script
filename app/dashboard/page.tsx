import { redirect } from "next/navigation"

import { ProjectList } from "./project-list"

import AuthButton from "@/components/AuthButton"
import { CreateProject } from "@/components/Dashboard/CreateProject"
import { createClient } from "@/utils/supabase/server"

export default async function ProtectedPage() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return redirect("/login")
  }

  const { data: projectData, error: projectError } = await supabase
    .from("projects")
    .select()
    .eq("owner_id", user.id)
    .returns<Project[]>()

  if (projectError) {
    console.error("Cannot get projects", projectError)
    return []
  }

  const { data: journalData, error: journalError } = await supabase.from("journals").select().returns<Journal[]>()

  if (journalError) {
    console.error("Cannot get journals", journalError)
    return []
  }

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
