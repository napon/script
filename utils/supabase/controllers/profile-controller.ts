import { SupabaseClient } from "@supabase/supabase-js"

import { Database, ProfileInsertDto, ProfileUpdateDto, TableName } from "@/models"

import { BaseController } from "./base-controller"

export class ProfileController extends BaseController<TableName.PROFILES> {
  constructor(supabase: SupabaseClient<Database>) {
    super(supabase, TableName.PROFILES)
  }

  public async getUserProfile() {
    const user = await this.getUser()
    return this.get("id", user.id)
  }

  public async getZoteroState() {
    const user = await this.getUser()
    const profile = await this.get("id", user.id)
    return profile!.zotero_oauth_state
  }

  public async getZoteroUserId() {
    const user = await this.getUser()
    const profile = await this.get("id", user.id)
    return profile!.zotero_userId
  }

  public async getZoteroApiKey() {
    const user = await this.getUser()
    const profile = await this.get("id", user.id)
    return profile!.zotero_api_key
  }

  public async updateProfile(id: number | string, data: ProfileInsertDto) {
    return this.update(id, data)
  }
}
