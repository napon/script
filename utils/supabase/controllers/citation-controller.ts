import { SupabaseClient } from "@supabase/supabase-js"

import { CitationInsertDto, Database, TableName } from "@/models"

import { BaseController } from "./base-controller"
import { AuthorController } from "./citationAuthor-controller"

interface ZoteroObject {
  key: string
  version: number
  library: object
  links: object
  meta: object
  data: ZoteroData
}

interface ZoteroData {
  key: string
  version: string
  itemType: string
  title: string
  creators: ZoteroAuthor[]
  abstractNote: string
  publicationTitle: string
  volume: string
  issue: string
  pages: string
  date: string
  series: string
  seriesTitle: string
  seriesText: string
  journalAbbreviation: string
  language: string
  DOI: string
  ISSN: string
  shortTitle: string
  url: string
  accessDate: string
  archive: string
  archiveLocation: string
  libraryCatalog: string
  callNumber: string
  rights: string
  extra: string
  tags: object[]
  collections: object[]
  relations: object
  dateAdded: string
  dateModified: string
}

interface ZoteroAuthor {
  creatorType: string
  firstName: string
  lastName: string
}

export class CitationController extends BaseController<TableName.CITATIONS> {
  private authorController: AuthorController

  constructor(supabase: SupabaseClient<Database>) {
    super(supabase, TableName.CITATIONS)
    this.authorController = new AuthorController(supabase)
  }

  public async getAllCitationsForCurrentUser() {
    const user = await this.getUser()
    const citations: Citation[] = await this.getAllForQuery("owner_id", user.id)
    const fullCitations: CitationWithAuthor[] = await Promise.all(
      citations.map(async (citation: Citation) => {
        const authors: CitationAuthor[] = await this.authorController.getAllAuthorsForCitation(
          citation.id,
        )
        return {
          ...citation,
          authors: authors,
        }
      }),
    )

    return fullCitations
  }

  public async populateCitations(zoteroObjects: ZoteroObject[], projectId: number) {
    const user = await this.getUser()

    const createdData: Promise<Citation>[] = []

    zoteroObjects.forEach(async (zoteroCitation: ZoteroObject) => {
      this.insertCitationAndAuthor(user.id, zoteroCitation, projectId)
    })

    return createdData
  }

  public async updateCitations(projectId: number) {
    const user = await this.getUser()
    const profile = await this.getUserProfile(user.id)

    if (profile.zotero_oauth_state == 2 && profile.zotero_api_key && profile.zotero_userId) {
      const response = await fetch(
        `https://api.zotero.org/users/${profile.zotero_userId}/items?itemType=journalArticle`,
        {
          headers: {
            "Zotero-API-Key": profile.zotero_api_key,
          },
        },
      )

      const zoteroCitations: ZoteroObject[] = await response.json().then(body => {
        return body
      })

      zoteroCitations.forEach(async (citation: ZoteroObject) => {
        const { data, error } = await this.supabase
          .from(this.tableName)
          .select("id(count)")
          .eq("zotero_key", citation.key)

        if (error) {
          throw new Error("Error fetching existing citations: " + error.message)
        }

        if (!data[0]) {
          // Citation not imported yet
          console.log("Creating new Citation")
          this.insertCitationAndAuthor(user.id, citation, projectId)
        }
      })
    } else {
      throw new Error("User hasn't integrated Zotero")
    }
  }

  private async insertCitationAndAuthor(
    userId: string,
    zoteroCitation: ZoteroObject,
    projectId: number,
  ) {
    // Insert Citation
    const citation = {
      owner_id: userId,
      project_id: projectId,
      zotero_key: zoteroCitation.key,
      title: zoteroCitation.data.title,
      publication_title: zoteroCitation.data.publicationTitle,
      volume: zoteroCitation.data.volume,
      pages: zoteroCitation.data.pages,
      date: zoteroCitation.data.date,
      journal_abbreviation: zoteroCitation.data.journalAbbreviation,
      url: zoteroCitation.data.url,
      item_type: zoteroCitation.data.itemType,
      issue: zoteroCitation.data.issue,
    }

    const { data: createdCitation, error } = await this.supabase
      .from(this.tableName)
      .insert(citation)
      .select()
      .single()

    if (error) {
      throw new Error("Error creating data: " + error.message)
    }

    // Insert authors
    if (createdCitation) {
      const _createdAuthors = await this.authorController.createAuthor(
        zoteroCitation.data.creators,
        createdCitation.id as number,
      )
    }
  }
}
