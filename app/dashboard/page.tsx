import { redirect } from "next/navigation"

import { ProjectList } from "./project-list"

import AuthButton from "@/components/AuthButton"
import { CreateProject } from "@/components/Dashboard/CreateProject"
import { createClient } from "@/utils/supabase/server"

const supabase = createClient()

async function fetchUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return user
}

async function fetchProjects(userId: string) {
  const { data, error } = await supabase.from("projects").select().eq("owner_id", userId).returns<Project[]>()

  if (error) {
    console.error("Cannot get projects", error)
    return []
  }

  return data
}

async function fetchJournals() {
  const { data, error } = await supabase.from("journals").select().returns<Journal[]>()

  if (error) {
    console.error("Cannot get journals", error)
    return []
  }

  return data
}

export default async function ProtectedPage() {
  const user = await fetchUser()

  if (!user) {
    return redirect("/login")
  }

  const [projectData, journalData] = await Promise.all([fetchProjects(user.id), fetchJournals()])

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
