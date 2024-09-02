"use client"

import { Image } from "lucide-react"

import useFigurePreview from "./hooks"

export const FigurePreviewPane: React.FunctionComponent = () => {
  const { currentFigureUrl } = useFigurePreview()

  return (
    <div className="size-full">
      {currentFigureUrl ? (
        <img src={currentFigureUrl} className="w-full" alt={"empty preview"} />
      ) : (
        <Image className={`w-full`} />
      )}
    </div>
  )
}
