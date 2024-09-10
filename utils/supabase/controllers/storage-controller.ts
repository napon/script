import { SupabaseClient } from "@supabase/supabase-js"

import { Database } from "@/models"

export class StorageController {
  private supabase: SupabaseClient<Database>
  constructor(supabase: SupabaseClient<Database>) {
    this.supabase = supabase
  }

  public async deleteFigureImagesFromStorage(imageUrls: string[]) {
    const paths = imageUrls.map(url => this.getFilePathFromPublicUrl(url, "figure_images_bucket"))
    return this.deleteFilesFromStorage("figure_images_bucket", paths)
  }

  private getFilePathFromPublicUrl(publicUrl: string, bucketName: string) {
    const regex = new RegExp(
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}\/storage\/v1\/object\/public\/${bucketName}\/`,
      "g",
    )
    return publicUrl.replace(regex, "")
  }

  private async deleteFilesFromStorage(bucketName: string, paths: string[]) {
    await this.supabase.storage.from(bucketName).remove(paths)
  }
}
