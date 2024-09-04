"use server"

import { createSupabaseApiClient } from "@/utils/supabase/api"
import { createServerClient } from "@/utils/supabase/server"

export async function fetchZoteroCitationsAction(projectId: number) {
  const supabase = createServerClient()
  const apiClient = createSupabaseApiClient(supabase)

  console.log("In server action")
  await apiClient.citation.updateCitations(projectId)

  return { success: true }
}
