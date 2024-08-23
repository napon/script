import { BaseController } from "./base-controller"

export class JournalController extends BaseController {
  public async getAllJournals() {
    return this.getAll<Journal>()
  }
}
