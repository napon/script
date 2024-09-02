import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isStringValidIntegerIdentifier(str: string) {
  const n = Math.floor(Number(str))
  return n !== Infinity && String(n) === str && n >= 0
}

export function getFileExtension(filename: string) {
  return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2)
}

export function getFileNameFromBucketPath(bucketPath: string) {
  // Split the path by '/'
  const pathParts = bucketPath.split("/")
  // Get the last part of the path which should be the file name
  const fileName = pathParts[pathParts.length - 1]
  return fileName
}
