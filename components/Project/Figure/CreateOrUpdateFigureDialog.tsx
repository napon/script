import { FunctionComponent, ReactNode, useCallback, useState } from "react"
import { ImagePlus } from "lucide-react"
import { useDropzone } from "react-dropzone"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"

import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Figure } from "@/models"

export interface CreateOrUpdateFigureDialogProps {
  ButtonUI: ReactNode
  figureGroupId: number
  figure?: Figure
  onCaptionUpdate?: (id: number, data: Figure) => any
}

export const CreateOrUpdateFigureDialog: FunctionComponent<CreateOrUpdateFigureDialogProps> = ({
  figure,
  figureGroupId,
  onCaptionUpdate,
  ButtonUI,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [preview, setPreview] = useState<string | ArrayBuffer | null>("")

  const formSchema = z.object({
    image: z.instanceof(File).refine(file => {
      return figure || file.size !== 0
    }, "Please upload an image"),
    caption: z.string({ required_error: "Figure must have a caption" }),
    figureGroupId: z.number().int(),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      image: new File([""], "filename"),
      figureGroupId: figureGroupId,
      caption: figure?.caption || "",
    },
  })

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const reader = new FileReader()
      try {
        reader.onload = () => setPreview(reader.result)
        reader.readAsDataURL(acceptedFiles[0])
        form.setValue("image", acceptedFiles[0])
        form.clearErrors("image")
      } catch (error) {
        setPreview(null)
        form.resetField("image")
      }
    },
    [form],
  )

  const { getRootProps, getInputProps, isDragActive, fileRejections } = useDropzone({
    onDrop,
    maxFiles: 1,
    maxSize: 500000,
    accept: { "image/*": [] },
  })

  const onSubmit: SubmitHandler<FieldValues> = async ({ caption, image, figureGroupId }) => {
    console.log(form.formState)
    if (!form.formState.dirtyFields.caption) return setIsDialogOpen(false)
    if (figure && onCaptionUpdate) {
      // update existing
      try {
        await onCaptionUpdate(figure.id, { ...figure, caption })
        setIsDialogOpen(false)
      } catch (e: any) {
        form.setError("root", { message: "Unknown error. Please try again later." })
      }
    } else {
      // new figure
      const formData = new FormData()
      formData.append("image", image)
      formData.append("figureGroupId", figureGroupId)
      formData.append("caption", caption)
      return fetch("/api/upload-figures", {
        method: "POST",
        body: formData,
      }).then((response: Response) => {
        if (response.ok) {
          setIsDialogOpen(false)
        } else {
          form.setError("root", { message: "Unknown error. Please try again later." })
        }
      })
    }
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>{ButtonUI}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Upload New Figure</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {figure ? null : (
              <FormField
                control={form.control}
                name="image"
                render={() => (
                  <FormItem className="w-full">
                    <FormControl>
                      <div
                        {...getRootProps()}
                        className="mx-auto flex cursor-pointer flex-col items-center justify-center gap-y-2 rounded-lg border border-foreground p-8 shadow-sm shadow-foreground"
                      >
                        {preview && (
                          <img
                            src={preview as string}
                            alt="Uploaded image"
                            className="max-h-[400px] rounded-lg"
                          />
                        )}
                        <ImagePlus className={`size-40 ${preview ? "hidden" : "block"}`} />
                        <Input {...getInputProps()} type="file" />
                        {isDragActive ? (
                          <p>Drop the image!</p>
                        ) : (
                          <p>Click here or drag an image to upload it</p>
                        )}
                      </div>
                    </FormControl>
                    <FormMessage>
                      {fileRejections.length !== 0 && <p>Image must be less than 5MB</p>}
                    </FormMessage>
                  </FormItem>
                )}
              />
            )}
            <FormField
              control={form.control}
              name="caption"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Caption</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter a caption" {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormMessage>{form.formState.errors.root?.message}</FormMessage>
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="mx-auto block h-auto rounded-lg px-8 py-3"
            >
              Save
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
