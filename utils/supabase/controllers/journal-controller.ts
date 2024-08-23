import { BaseController } from "./base-controller"

export class JournalController extends BaseController<Journal> {
  public async getAllJournals() {
    return this.getAll()
  }
}
