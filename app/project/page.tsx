import { redirect } from "next/navigation"

import { DocumentContentEditor } from "@/components/DocumentContentEditor"
import { getDummyDocumentContent } from "@/utils/demo/dummy-project"
import { createClient } from "@/utils/supabase/server"

export default async function ProjectPage() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return redirect("/login")
  }

  return (
    <div className="flex size-full flex-1 flex-row">
      <div className="flex w-1/5 flex-none flex-col">{/* SECTION */}</div>

      <div className="flex h-screen w-full flex-1 flex-col py-20">
        <DocumentContentEditor documentContent={getDummyDocumentContent()} />
      </div>

      <div className="flex w-1/5 flex-none flex-col">{/* SECTION */}</div>
    </div>
  )
}
