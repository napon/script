import { Pencil, Trash, Upload } from "lucide-react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export const FigureEditButton = (
  <Button variant="outline" size="sm">
    <Pencil className="mr-2 size-4" /> Edit
  </Button>
)

export const FigureDeleteButton = (
  <Button variant="outline" size="sm">
    <Trash className="mr-2 size-4" /> Delete
  </Button>
)

export const FigureCreateButton = (
  <Button variant={"secondary"} className="mt-4 w-full">
    <Upload className="mr-2 size-4" /> Upload New Figure
  </Button>
)

export const CreateFigureGroupButton = <Button variant={"ghost"}>+ Create Figure Group</Button>

export const UpdateFigureGroupButton = (
  <Button variant={"link"} className="mb-4 h-min py-0 pl-6 text-sm hover:underline">
    add / update
  </Button>
)

export const DeleteFigureGroupButton = <Button variant={"destructive"}>Delete</Button>

export const DeleteButtonWithConfirmation = ({
  ButtonUI,
  confirmMessageTitle,
  confirmMessageDescription,
  onConfirm,
  onDismiss,
}: {
  ButtonUI: React.ReactNode
  confirmMessageTitle: string
  confirmMessageDescription: string
  onConfirm: () => void
  onDismiss: () => void
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{ButtonUI}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{confirmMessageTitle}</AlertDialogTitle>
          <AlertDialogDescription>{confirmMessageDescription}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onDismiss}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
