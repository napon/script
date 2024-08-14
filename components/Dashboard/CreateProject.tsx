"use client"

import { FunctionComponent, useState } from "react"

import { LoaderIcon, Plus } from "lucide-react"

import { createProjectAction } from "@/app/dashboard/createProjectAction"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type CreateProjectProps = {
  journals: Journal[] | null
}

export const CreateProject: FunctionComponent<CreateProjectProps> = ({ journals }) => {
  const [title, setTitle] = useState("")
  const [targetJournal, setTargetJournal] = useState("")
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [titleError, setTitleError] = useState(false)

  const onClick = async () => {
    // Validation for title field
    if (!title) {
      setTitleError(true)
      return
    }

    setLoading(true)
    await createProjectAction(title, targetJournal)
    setOpen(false)
    setLoading(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <div className="flex size-20 items-center justify-center rounded-full bg-white text-5xl">
          <Plus size={36} />
        </div>
        <p className="py-1 text-center text-sm">Create Project</p>
      </DialogTrigger>
      {loading ? (
        <DialogContent className="justify-center">
          <LoaderIcon className="animate-spin" />
        </DialogContent>
      ) : (
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle>Create a new Project</DialogTitle>
          </DialogHeader>
          <div className="grid items-center justify-center gap-4 py-4">
            <div className="flex w-full items-center justify-center gap-2">
              <label>Title</label>
              <input
                className={`rounded-md border bg-inherit px-4 py-2 ${titleError ? "border-red-500" : "bg-inherit"}`}
                name={title}
                placeholder="Untitled Project"
                required
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setTitle(e.currentTarget.value)
                  setTitleError(false)
                }}
              />
              {titleError && <p className="text-sm text-red-500">Title is required</p>}
            </div>
            <Select onValueChange={setTargetJournal}>
              <SelectTrigger className="w-52">
                <SelectValue placeholder="Select a journal" />
              </SelectTrigger>
              <SelectContent>
                {journals?.map(journal => (
                  <SelectItem key={journal.id} value={journal.name}>
                    {journal.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={onClick}>
              Create Project
            </Button>
          </DialogFooter>
        </DialogContent>
      )}
    </Dialog>
  )
}
