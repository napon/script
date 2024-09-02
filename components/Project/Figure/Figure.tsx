import { useState } from "react"
import { Image } from "lucide-react"

import { Figure } from "@/models"

import useFigurePreview from "./hooks"

export interface FigureItemProp {
  figure: Figure
}

export const FigureItem: React.FunctionComponent<FigureItemProp> = ({ figure }) => {
  const [showFullName, setShowFullName] = useState(false)
  const { currentFigureUrl, onRenderFigure } = useFigurePreview()

  return (
    <div key={figure.id} className={`py-1 pl-2`}>
      <div className="flex items-center">
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image className="mr-2 size-4 text-gray-500" />
        <span
          className={`cursor-pointer text-sm ${showFullName ? "" : "truncate"}`}
          style={{ maxWidth: "150px" }}
          onClick={() => {
            setShowFullName(!showFullName)
            if (currentFigureUrl !== figure.url) {
              onRenderFigure(figure.url)
            }
          }}
        >
          {figure.caption}
        </span>
      </div>
    </div>
  )
}
