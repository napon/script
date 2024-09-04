import type { Database } from "@/models/database.types"

declare global {
  type Project = Database["public"]["Tables"]["projects"]["Row"]

  type Document = Database["public"]["Tables"]["documents"]["Row"]

  type Journal = Database["public"]["Tables"]["journals"]["Row"]

  type Citation = Database["public"]["Tables"]["citations"]["Row"]

  type CitationWithAuthor = {
    id: number
    created_at: string | null
    project_id: number
    owner_id: string
    zotero_key: string
    title: string
    publication_title: string
    volume: string
    pages: string
    date: string
    journal_abbreviation: string
    url: string
    authors: CitationAuthor[]
    issue: string
    item_type: string
  }

  type Profile = Database["public"]["Tables"]["profiles"]["Row"]

  type CitationAuthor = Database["public"]["Tables"]["citation_authors"]["Row"]
}
