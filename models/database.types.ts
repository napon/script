import { MergeDeep } from "type-fest"

import { DocumentContent } from "./document.types"
import { Database as GeneratedDatabase } from "./generated-database.types"

export enum TableName {
  PROJECTS = "projects",
  CITATIONS = "citations",
  DOCUMENTS = "documents",
  PROFILES = "profiles",
  JOURNALS = "journals",
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

type Row<T extends TableKeys> = Database["public"]["Tables"][T]["Row"]
type InsertDto<T extends TableKeys> = Database["public"]["Tables"][T]["Insert"]
type UpdateDto<T extends TableKeys> = Database["public"]["Tables"][T]["Update"]

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
