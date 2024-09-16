import type { Database } from "@/models/generated-database.types"

declare global {
  type Project = Database["public"]["Tables"]["projects"]["Row"]

  type Document = Database["public"]["Tables"]["documents"]["Row"]

  type Journal = Database["public"]["Tables"]["journals"]["Row"]
}
