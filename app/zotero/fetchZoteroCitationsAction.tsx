"use server"

import { createSupabaseApiClient } from "@/utils/supabase/api"
import { createServerClient } from "@/utils/supabase/server"

export async function fetchZoteroCitationsAction(projectId: number) {
  const supabase = createServerClient()
  const apiClient = createSupabaseApiClient(supabase)

  await apiClient.citation.updateCitations(projectId)

  return await apiClient.citation.getAllCitationsForCurrentUser()
}
