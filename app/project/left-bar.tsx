import CitationDisplay from "@/components/Citations/CitationDisplay"
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { createClient } from "@/utils/supabase/server"

interface ZoteroObject {
  key: string
  version: number
  library: object
  links: object
  meta: object
  data: object
}

export async function LeftBar() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const response = await fetch("https://api.zotero.org/users/14552448/items?itemType=journalArticle", {
    headers: {
      "Zotero-API-Key": "ccZeeE16gzuNWBaAXcVdtIKq",
    },
  })

  const citations: Citation[] = await response.json().then(body => {
    return body.map((item: ZoteroObject) => {
      return item.data
    })
  })

  return (
    <ResizablePanelGroup direction="vertical" className="space-y-1">
      <ResizablePanel defaultSize={30} className="border p-1">
        <div>Authors</div>
      </ResizablePanel>
      <ResizablePanel defaultSize={15} className="border p-1">
        <div>Keywords</div>
      </ResizablePanel>
      <ResizablePanel defaultSize={30} className="border p-1">
        <CitationDisplay userId={user?.id} integratedZotero={false} citations={[]}></CitationDisplay>
      </ResizablePanel>
      <ResizablePanel defaultSize={25} className="border p-1">
        <div>Notes</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
