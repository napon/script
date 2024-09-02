import { SupabaseClient } from "@supabase/supabase-js"

import { Database, FigureUpdateDto, TableName } from "@/models"

import { BaseController } from "./base-controller"

export class FigureController extends BaseController<TableName.FIGURES> {
  constructor(supabase: SupabaseClient<Database>) {
    super(supabase, TableName.FIGURES)
  }

  public async updateFigureCaption(id: number, data: FigureUpdateDto) {
    const { data: updatedData, error } = await this.supabase
      .from("figures")
      .update(data)
      .eq("id", id)
      .select()
      .single()

    if (error) {
      throw new Error("Error updating data: " + error.message)
    }

    return updatedData
  }

  public async deleteFigure(id: number) {
    const { url } = await this.delete(id)
  }
}
