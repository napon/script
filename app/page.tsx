import { redirect } from "next/navigation"

import { createServerClient } from "@/utils/supabase/server"

import AuthButton from "../components/AuthButton"

export default async function Index() {
  const supabase = createServerClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    redirect("/dashboard")
  }

  return (
    <div className="flex w-full flex-1 flex-col items-center gap-20">
      <nav className="flex h-16 w-full justify-center border-b border-b-foreground/10">
        <div className="flex w-full max-w-4xl items-center justify-between p-3 text-sm">
          <AuthButton />
        </div>
      </nav>

      <div className="flex max-w-4xl flex-1 flex-col gap-20 px-3">
        <p className="mx-auto max-w-xl text-center text-3xl !leading-tight lg:text-4xl">
          Landing page
        </p>
      </div>
    </div>
  )
}
