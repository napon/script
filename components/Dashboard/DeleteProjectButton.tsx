"use client"

import { FunctionComponent, useState } from "react"

import { Button } from "../ui/button"

import { deleteProjectAction } from "@/app/dashboard/deleteProjectAction"

type DeleteProjectButtonProps = {
  projectId: number
}

export const DeleteProjectButton: FunctionComponent<DeleteProjectButtonProps> = ({ projectId }) => {
  const [loading, setLoading] = useState(false)

  const handleDelete = async () => {
    setLoading(true)
    await deleteProjectAction(projectId)
    setLoading(false)
  }

  return (
    <div>
      {loading ? (
        <Button disabled className="m-5">
          Deleting...
        </Button>
      ) : (
        <Button variant="destructive" className="m-5" onClick={handleDelete}>
          Delete
        </Button>
      )}
    </div>
  )
}
