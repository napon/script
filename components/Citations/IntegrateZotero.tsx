"use client"

import { useRouter } from "next/navigation"

import { Button } from "../ui/button"

export default function IntegrateZotero({ projectId }: { projectId: number }) {
  const router = useRouter()

  const handleClick = () => {
    if (!window.location.href.includes("rsc")) {
      router.replace(`/zotero?projectId=${projectId}`)
    }
  }

  return (
    <Button type="submit" onClick={handleClick}>
      Integrate Zotero
    </Button>
  )
}
