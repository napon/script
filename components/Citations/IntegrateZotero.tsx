"use client"

import { Button } from "../ui/button"

export default function IntegrateZotero() {
  return (
    <form action="/zotero" method="GET">
      <Button type="submit">Integrate Zotero</Button>
    </form>
  )
}
