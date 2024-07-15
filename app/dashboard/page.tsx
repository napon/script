import { redirect } from "next/navigation"

import AuthButton from "@/components/AuthButton"
import { createClient } from "@/utils/supabase/server"

export default async function ProtectedPage() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return redirect("/login")
  }

  return (
    <div className="flex w-full flex-1 flex-col items-center gap-20">
      <div className="w-full">
        <div className="bg-purple-950 py-6 text-center font-bold text-primary-foreground">
          This is a protected page that you can only see as an authenticated user
        </div>
        <nav className="flex h-16 w-full justify-center border-b border-b-foreground/10">
          <div className="flex w-full max-w-4xl items-center justify-between p-3 text-sm">
            <AuthButton />
          </div>
        </nav>
      </div>

      <div className="flex max-w-4xl flex-1 flex-col gap-20 px-3">
        <p className="mx-auto max-w-xl text-center text-3xl !leading-tight lg:text-4xl">Dashboard page</p>
      </div>
    </div>
  )
}
