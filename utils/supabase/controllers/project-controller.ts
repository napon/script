import { BaseController } from "./base-controller"

import { ProjectInsertDto, ProjectUpdateDto } from "@/models"

export class ProjectController extends BaseController {
  async getProjectById(id: number | string) {
    return this.get<Project>("id", id)
  }

  async createProject(title: string) {
    const user = await this.getUser()
    const data: ProjectInsertDto = {
      title,
      owner_id: user.id,
    }

    return this.create<Project>(data)
  }

  async updateProject(id: number | string, data: ProjectUpdateDto) {
    return this.update<Project>(id, data)
  }

  async deleteProject(id: number | string) {
    return this.delete(id)
  }
}
