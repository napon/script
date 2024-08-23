import { KeysOfUnion } from "type-fest"

import { SupabaseClient, User } from "@supabase/supabase-js"

import { Database, TableInsertDtos, TableName, TableRows, TableUpdateDtos } from "@/models"
import { Json } from "@/models/generated-database.types"

export class BaseController<
  K extends TableName,
  T = TableRows[K],
  I = TableInsertDtos[K],
  U = TableUpdateDtos[K],
> {
  protected supabase: SupabaseClient
  protected tableName: TableName

  constructor(supabase: SupabaseClient<Database>, tableName: TableName) {
    this.supabase = supabase
    this.tableName = tableName
  }

  protected async getUser(): Promise<User> {
    const { data, error } = await this.supabase.auth.getUser()

    if (error) {
      throw new Error("Error fetching user: " + error.message)
    } else if (!data) {
      throw new Error("User not authenticated")
    }

    return data.user
  }

  protected async get(columnName: KeysOfUnion<T>, value: NonNullable<Json>): Promise<T | null> {
    const { data, error } = await this.supabase
      .from(this.tableName)
      .select()
      .eq(columnName as string, value)
      .single()

    if (error) {
      throw new Error("Error fetching data: " + error.message)
    }

    return data as T
  }

  protected async getAll(): Promise<T[]> {
    const { data, error } = await this.supabase.from(this.tableName).select().returns<T[]>()

    if (error) {
      throw new Error("Error fetching data: " + error.message)
    }

    return data as T[]
  }

  protected async getAllForQuery(
    columnName: KeysOfUnion<T>,
    value: NonNullable<Json>,
  ): Promise<T[]> {
    const { data, error } = await this.supabase
      .from(this.tableName)
      .select()
      .eq(columnName as string, value)
      .returns<T[]>()

    if (error) {
      throw new Error("Error fetching data: " + error.message)
    }

    return data as T[]
  }

  protected async create(data: I): Promise<T> {
    const { data: createdData, error } = await this.supabase
      .from(this.tableName)
      .insert(data)
      .select()
      .single()

    if (error) {
      throw new Error("Error creating data: " + error.message)
    }

    return createdData as T
  }

  protected async update(id: number | string, data: U): Promise<T | null> {
    const { data: updatedData, error } = await this.supabase
      .from(this.tableName)
      .update(data)
      .eq("id", id)
      .select()
      .single()

    if (error) {
      throw new Error("Error updating data: " + error.message)
    }

    return updatedData as T
  }

  protected async delete(id: number | string): Promise<void> {
    const { error } = await this.supabase.from(this.tableName).delete().eq("id", id)

    if (error) {
      throw new Error("Error deleting data: " + error.message)
    }
  }
}
