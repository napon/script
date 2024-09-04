import { createSupabaseApiClient } from "@/utils/supabase/api"
import { createServerClient } from "@/utils/supabase/server"
import { create } from "zustand"

interface CitationState {
  citations: CitationWithAuthor[]
  setCitations: (citations: CitationWithAuthor[]) => void
}

export const useCitationStore = create<CitationState>(set => ({
  citations: [],

  setCitations: (citations: CitationWithAuthor[]) => {
    set({ citations })
  },
}))
