import type { Database } from "@/models/database.types"

declare global {
  type Project = Database["public"]["Tables"]["projects"]["Row"]

  type Document = Database["public"]["Tables"]["documents"]["Row"]

  type Journal = Database["public"]["Tables"]["journals"]["Row"]

  type Citation = Database["public"]["Tables"]["citations"]["Row"]

  type Profile = Database["public"]["Tables"]["profiles"]["Row"]
}
