import { useState } from "react"
import { ChevronDown, ChevronRight, FolderKanban } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FigureGroupUpdateDto } from "@/models"
import { FigureGroupWithChildren } from "@/models/figure.types"

import { UpdateFigureGroupButton } from "./Buttons"
import { CreateOrUpdateFigureGroupDialog } from "./CreateOrUpdateFigureGroupDialog"
import { FigureItem } from "./Figure"

export interface FigureGroupItemProp {
  projectId: number
  group: FigureGroupWithChildren
  onGroupUpdate: (data: FigureGroupUpdateDto) => void
}

export const FigureGroupItem: React.FunctionComponent<FigureGroupItemProp> = ({
  projectId,
  group,
  onGroupUpdate,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [showFullName, setShowFullName] = useState(false)
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div key={group.id} className={`pl-4`}>
      <div className="flex items-center py-1">
        <Button
          variant="ghost"
          size="icon"
          className="size-4"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <ChevronRight className="size-4" /> : <ChevronDown className="size-4" />}
        </Button>
        <FolderKanban className="mr-2 size-4 text-blue-500" />
        <p
          className={`cursor-pointer ${showFullName ? "" : "truncate"} text-sm`}
          style={{ maxWidth: "150px" }}
          onClick={() => setShowFullName(!showFullName)}
        >
          {group.title} <span className={`text-neutral-500`}>{group.description}</span>
        </p>
      </div>
      {!isCollapsed && (
        <div className="ml-6">
          {group.figures.map(figure => (
            <FigureItem key={figure.id} figure={figure} />
          ))}
        </div>
      )}
      <CreateOrUpdateFigureGroupDialog
        figureGroup={group}
        projectId={projectId}
        onSave={async (data: FigureGroupUpdateDto) => {
          return onGroupUpdate(data)
        }}
        ButtonUI={UpdateFigureGroupButton}
      />
    </div>
  )
}
