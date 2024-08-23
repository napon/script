import { useEffect, useMemo, useRef } from "react"
import { debounce } from "lodash"

export const useDebounce = <T extends (...args: any) => any>(callback: T, wait: number = 1000) => {
  const ref = useRef<T>()

  useEffect(() => {
    ref.current = callback
  }, [callback])

  const debouncedCallback = useMemo(() => {
    const callRefFunction = () => {
      ref.current?.()
    }
    return debounce(callRefFunction, wait)
  }, [])

  return debouncedCallback
}
