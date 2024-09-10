"use client"

import { Image } from "lucide-react"

import useFigurePreview from "./hooks"

export const FigurePreviewPane: React.FunctionComponent = () => {
  const { currentFigureUrl } = useFigurePreview()

  return (
    <div className="flex size-full flex-col">
      <p className="border-b p-2">Figure Preview</p>
      {currentFigureUrl ? (
        <div className="box-border h-full justify-center p-2">
          <img src={currentFigureUrl} className="object-contain" alt={"empty preview"} />
        </div>
      ) : (
        <Image color={"#e8e8e8"} className={`size-full`} />
      )}
    </div>
  )
}
