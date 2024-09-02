import { Figure, FigureGroup } from "./database.types"

export type FigureGroupWithChildren = FigureGroup & {
  figures: Figure[]
}
