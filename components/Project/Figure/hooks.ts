import { create } from "zustand"

interface FigurePreviewStore {
  currentFigureUrl: string | null
  onRenderFigure: (url: string) => void
}

const useFigurePreview = create<FigurePreviewStore>(set => ({
  currentFigureUrl: null,
  onRenderFigure: (url: string) => set({ currentFigureUrl: url }),
}))

export default useFigurePreview
