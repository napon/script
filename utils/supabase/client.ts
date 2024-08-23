import { createBrowserClient } from "@supabase/ssr"

import { Database } from "@/models"

export const createClientComponentClient = () =>
  createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )
