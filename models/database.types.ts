import { MergeDeep } from "type-fest"

import { DocumentContent } from "./document.types"
import { Database as GeneratedDatabase } from "./generated-database.types"

export enum TableName {
  PROJECTS = "projects",
  CITATIONS = "citations",
  DOCUMENTS = "documents",
  PROFILES = "profiles",
  JOURNALS = "journals",
  CITATION_AUTHORS = "citation_authors",
  FIGURE_GROUPS = "figure_groups",
  FIGURES = "figures",
}

export type Database = MergeDeep<
  GeneratedDatabase,
  {
    public: {
      Tables: {
        documents: {
          Row: {
            content: DocumentContent
          }
        }
      }
    }
  }
>

type TableKeys = keyof Database["public"]["Tables"]

export type Row<T extends TableKeys> = Database["public"]["Tables"][T]["Row"]
export type InsertDto<T extends TableKeys> = Database["public"]["Tables"][T]["Insert"]
export type UpdateDto<T extends TableKeys> = Database["public"]["Tables"][T]["Update"]

export type Project = Row<TableName.PROJECTS>
export type ProjectInsertDto = InsertDto<TableName.PROJECTS>
export type ProjectUpdateDto = UpdateDto<TableName.PROJECTS>

export type Citation = Row<TableName.CITATIONS>
export type CitationInsertDto = InsertDto<TableName.CITATIONS>
export type CitationUpdateDto = UpdateDto<TableName.CITATIONS>

export type Document = Row<TableName.DOCUMENTS>
export type DocumentInsertDto = InsertDto<TableName.DOCUMENTS>
export type DocumentUpdateDto = UpdateDto<TableName.DOCUMENTS>

export type Profile = Row<TableName.PROFILES>
export type ProfileInsertDto = InsertDto<TableName.PROFILES>
export type ProfileUpdateDto = UpdateDto<TableName.PROFILES>

export type Journal = Row<TableName.JOURNALS>
export type JournalInsertDto = InsertDto<TableName.JOURNALS>
export type JournalUpdateDto = UpdateDto<TableName.JOURNALS>

export type CitationAuthor = Row<TableName.CITATION_AUTHORS>
export type CitationAuthorInsertDto = InsertDto<TableName.CITATION_AUTHORS>
export type CitationAuthorUpdateDto = UpdateDto<TableName.CITATION_AUTHORS>

export type FigureGroup = Row<TableName.FIGURE_GROUPS>
export type FigureGroupInsertDto = InsertDto<TableName.FIGURE_GROUPS>
export type FigureGroupUpdateDto = UpdateDto<TableName.FIGURE_GROUPS>

export type Figure = Row<TableName.FIGURES>
export type FigureInsertDto = InsertDto<TableName.FIGURES>
export type FigureUpdateDto = UpdateDto<TableName.FIGURES>
