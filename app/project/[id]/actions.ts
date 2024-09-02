"use server"

import { revalidatePath } from "next/cache"

export async function revalidateProjectPage(id: number) {
  revalidatePath(`/project/${id}`, "page")
}
