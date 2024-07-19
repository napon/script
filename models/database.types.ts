import { Database } from "./generated-database.types"

type TableKeys = keyof Database["public"]["Tables"]

export type Row<T extends TableKeys> = Database["public"]["Tables"][T]["Row"]
export type InsertDto<T extends TableKeys> = Database["public"]["Tables"][T]["Insert"]
export type UpdateDto<T extends TableKeys> = Database["public"]["Tables"][T]["Update"]

export type Project = Row<"projects">
export type ProjectInsertDto = InsertDto<"projects">
export type ProjectUpdateDto = UpdateDto<"projects">

export type Citation = Row<"citations">
export type CitationInsertDto = InsertDto<"citations">
export type CitationUpdateDto = UpdateDto<"citations">

export type Document = Row<"documents">
export type DocumentInsertDto = InsertDto<"documents">
export type DocumentUpdateDto = UpdateDto<"documents">

export type Profile = Row<"profiles">
export type ProfileInsertDto = InsertDto<"profiles">
export type ProfileUpdateDto = UpdateDto<"profiles">

export type User = Row<"journals">
export type UserInsertDto = InsertDto<"journals">
export type UserUpdateDto = UpdateDto<"journals">
