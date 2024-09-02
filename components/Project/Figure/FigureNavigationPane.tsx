"use client"

import React, { FunctionComponent, useMemo } from "react"
import { Info } from "lucide-react"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { FigureGroupInsertDto, FigureGroupUpdateDto } from "@/models/database.types"
import { FigureGroupWithChildren } from "@/models/figure.types"
import { createSupabaseApiClient } from "@/utils/supabase/api"
import { createClientComponentClient } from "@/utils/supabase/client"

import { revalidateProjectPage } from "../../../app/project/[id]/actions"
import { CreateFigureGroupButton } from "./Buttons"
import { CreateOrUpdateFigureGroupDialog } from "./CreateOrUpdateFigureGroupDialog"
import { FigureGroupItem } from "./FigureGroup"

export interface FigureNavigationProps {
  projectId: number
  figureGroupArray: FigureGroupWithChildren[] | null
}

export const FigureNavigationPane: FunctionComponent<FigureNavigationProps> = ({
  figureGroupArray,
  projectId,
}) => {
  const apiClient = useMemo(() => createSupabaseApiClient(createClientComponentClient()), [])
  const renderPane = () => {
    if (!figureGroupArray) {
      return (
        <div>
          <p>Error fetching figures</p>
        </div>
      )
    } else {
      return figureGroupArray.map(group => (
        <FigureGroupItem
          key={group.id}
          group={group}
          projectId={projectId}
          onGroupUpdate={async (data: FigureGroupUpdateDto) => {
            await apiClient.figureGroup.updateFigureGroup(group.id, data)
            await revalidateProjectPage(projectId)
          }}
        />
      ))
    }
  }

  return (
    <div className="size-full rounded-lg border shadow-sm">
      <div className="flex items-center justify-between border-b p-2">
        <CreateOrUpdateFigureGroupDialog
          projectId={projectId}
          onSave={async (data: FigureGroupInsertDto) => {
            await apiClient.figureGroup.createFigureGroup(data)
            await revalidateProjectPage(projectId)
          }}
          ButtonUI={CreateFigureGroupButton}
        />
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="size-4" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Figure numbering will be handled automatically at export time.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <ScrollArea className="h-[300px]">
        <div className="p-2">{renderPane()}</div>
      </ScrollArea>
    </div>
  )
}
