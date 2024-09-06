import { FunctionComponent, ReactNode, useState } from "react"
import Image from "next/image"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"

import { revalidateProjectPage } from "@/app/project/[id]/actions"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Figure, FigureGroupInsertDto } from "@/models"
import { FigureGroupWithChildren } from "@/models/figure.types"
import { createSupabaseApiClient } from "@/utils/supabase/api"
import { createClientComponentClient } from "@/utils/supabase/client"

import {
  DeleteButtonWithConfirmation,
  DeleteFigureGroupButton,
  FigureCreateButton,
  FigureDeleteButton,
  FigureEditButton,
} from "./Buttons"
import { CreateOrUpdateFigureDialog } from "./CreateOrUpdateFigureDialog"

export interface CreateOrUpdateFigureDialogGroupProps {
  ButtonUI: ReactNode
  projectId: number
  figureGroup?: FigureGroupWithChildren
  onSave: (data: FigureGroupInsertDto) => void
}

type FormInputs = {
  title: string
  description?: string
}

export const CreateOrUpdateFigureGroupDialog: FunctionComponent<
  CreateOrUpdateFigureDialogGroupProps
> = ({ ButtonUI, projectId, figureGroup, onSave }) => {
  const [error, setError] = useState<string>("")
  const [open, setOpen] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    reset,
  } = useForm<FormInputs>({
    defaultValues: {
      title: figureGroup?.title || "",
      description: figureGroup?.description || "",
    },
  })
  const supabase = createClientComponentClient()
  const apiClient = createSupabaseApiClient(supabase)

  const onSubmit: SubmitHandler<FieldValues> = async ({ title, description }) => {
    if (!dirtyFields.description && !dirtyFields.title) return setOpen(false) // no change (close dialog)
    try {
      const isCreatingNewFigureGroup = !figureGroup
      setError("")
      const { data } = await supabase.auth.getSession()
      if (!data || !data.session) {
        setError("Your session expired, please reload and try again.")
        return
      }
      await onSave({
        id: figureGroup?.id,
        title,
        description,
        project_id: projectId,
        owner_id: data.session!.user.id,
      })
      if (isCreatingNewFigureGroup) {
        reset() // clear form
      }
      setOpen(false)
    } catch (e) {
      setError("Unknown Error. Please try again.")
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{ButtonUI}</DialogTrigger>
      <DialogContent className="max-h-screen sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{figureGroup ? "Update Figure Group" : "New Figure Group"}</DialogTitle>
          <DialogDescription>A Figure Group is a collection of related diagrams</DialogDescription>
        </DialogHeader>
        <form id="figureGroupForm" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <Input
              id="title"
              placeholder="Title"
              {...register("title", {
                required: "Title is required",
              })}
              error={errors.title?.message}
            />
            <Input
              id="description"
              placeholder="Description (optional)"
              {...register("description", {
                setValueAs: v => v.toString().trim(),
              })}
            />
          </div>
        </form>
        {figureGroup && (
          <>
            <div
              className={`my-2 ${figureGroup.figures.length > 0 ? "h-52" : "h-0"} overflow-y-scroll rounded-md pr-4`}
            >
              {figureGroup.figures.map(f => (
                <Card key={f.id} className="mb-4">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <Image
                        unoptimized={true}
                        src={f.url}
                        alt={f.caption}
                        width={150}
                        height={150}
                        className="rounded-md"
                      />
                      <div className="min-w-0 flex-1">
                        <div className={`line-clamp-3 text-sm`}>{f.caption}</div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end space-x-2">
                      <CreateOrUpdateFigureDialog
                        ButtonUI={FigureEditButton}
                        projectId={projectId}
                        figure={f}
                        figureGroupId={f.figure_group_id}
                        onCaptionUpdate={async (id: number, data: Figure) => {
                          await apiClient.figure.updateFigureCaption(id, data)
                          await revalidateProjectPage(projectId)
                        }}
                      />
                      <DeleteButtonWithConfirmation
                        ButtonUI={FigureDeleteButton}
                        confirmMessageTitle={"Are you sure?"}
                        confirmMessageDescription={"This will delete the Figure from the group."}
                        onConfirm={async () => {
                          await apiClient.figure.deleteFigure(f.id)
                          await apiClient.storage.deleteFigureImagesFromStorage([f.url])
                          await revalidateProjectPage(projectId)
                        }}
                        onDismiss={() => {}}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <CreateOrUpdateFigureDialog
              projectId={projectId}
              figureGroupId={figureGroup.id}
              ButtonUI={FigureCreateButton}
            />
          </>
        )}

        <Button form="figureGroupForm" type="submit" className="my-2">
          {figureGroup ? "Save" : "Create"}
        </Button>
        {figureGroup && (
          <DeleteButtonWithConfirmation
            ButtonUI={DeleteFigureGroupButton}
            confirmMessageTitle={"Are you sure?"}
            confirmMessageDescription={"This will also delete all figures inside the group."}
            onConfirm={async () => {
              await apiClient.figureGroup.deleteFigureGroup(figureGroup.id)
              await apiClient.storage.deleteFigureImagesFromStorage(
                figureGroup.figures.map(f => f.url),
              )
              await revalidateProjectPage(projectId)
            }}
            onDismiss={() => {}}
          />
        )}
        <p className="text-red-500">{error}</p>
      </DialogContent>
    </Dialog>
  )
}
