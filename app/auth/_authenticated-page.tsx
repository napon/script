import { FunctionComponent, PropsWithChildren } from "react"

import { redirect } from "next/navigation"

import { createClient } from "@/utils/supabase/server"

export const AuthenticatedPage: FunctionComponent<PropsWithChildren> = async ({ children }) => {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return redirect("/login")
  }

  return <>{children}</>
}
