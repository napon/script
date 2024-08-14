"use server"

import { redirect } from "next/navigation"

import { createClient } from "@/utils/supabase/server"

export async function createProjectAction(newTitle: string, targetJournal: string) {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error("User not authenticated")
  }

  console.log(targetJournal)

  const { error } = await supabase.from("projects").insert({ title: newTitle, owner_id: user?.id }).select()

  if (error) {
    throw new Error("Error creating project: " + error.message)
  }

  redirect("/project")
}
