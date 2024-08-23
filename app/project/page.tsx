import { redirect } from "next/navigation"

import { createServerClient } from "@/utils/supabase/server"

export default async function Page() {
  const supabase = createServerClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return redirect("/login")
  }

  return <></>
}
