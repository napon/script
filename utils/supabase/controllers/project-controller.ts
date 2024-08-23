import { ProjectInsertDto, ProjectUpdateDto } from "@/models"

import { BaseController } from "./base-controller"

export class ProjectController extends BaseController<Project> {
  public async getProjectById(id: number | string) {
    return this.get("id", id)
  }

  public async getAllProjectsForCurrentUser() {
    const user = await this.getUser()
    return this.getAllForQuery("owner_id", user.id)
  }

  public async createProject(title: string) {
    const user = await this.getUser()
    const data: ProjectInsertDto = {
      title,
      owner_id: user.id,
    }
    return this.create(data)
  }

  public async updateProject(id: number | string, data: ProjectUpdateDto) {
    return this.update(id, data)
  }

  public async deleteProject(id: number | string) {
    return this.delete(id)
  }
}
