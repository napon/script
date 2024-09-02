import { SupabaseClient } from "@supabase/supabase-js"

import { Database, FigureGroupInsertDto, FigureGroupUpdateDto, TableName } from "@/models"
import { FigureGroupWithChildren } from "@/models/figure.types"

import { BaseController } from "./base-controller"

export class FigureGroupController extends BaseController<TableName.FIGURE_GROUPS> {
  constructor(supabase: SupabaseClient<Database>) {
    super(supabase, TableName.FIGURE_GROUPS)
  }

  public async getFigureGroupWithChildrenForProject(
    projectId: number,
  ): Promise<FigureGroupWithChildren[] | null> {
    const result = await this.supabase
      .from("figure_groups")
      .select(
        `
      id,
      title,
      description,
      owner_id,
      created_at,
      project_id,
      figures ( id, caption, url, caption, created_at, owner_id, figure_group_id )
    `,
      )
      .eq("project_id", projectId)
      .order("created_at", { ascending: true })
      .order("created_at", { foreignTable: "figures", ascending: true })
    return result.data
  }

  public async createFigureGroup(data: FigureGroupInsertDto) {
    return this.create(data)
  }

  public async updateFigureGroup(id: number, data: FigureGroupUpdateDto) {
    return this.update(id, data)
  }

  public async deleteFigureGroup(id: number) {
    const data = await this.delete(id)
  }
}
