import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function pparseInt(val) {
  // Attempt to convert the value to a number if it's a string
  if (typeof val === `string`) {
    const parsed = parseInt(val)
    // Return the parsed number if it's a valid number, otherwise return undefined
    return isNaN(parsed) ? 0 : parsed
  }
  // If it's already a number, just return it
  return val
}
