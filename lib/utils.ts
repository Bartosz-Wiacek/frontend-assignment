import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { TIndustry } from '@/hooks/use-industries'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function mapArrayToAutoComplete(array: readonly string[]) {
  return array.map((item) => ({ label: item, value: item }))
}

export function mapIndustriesToAutoComplete(array: TIndustry[]) {
  return array.map((item) => ({ label: item.name, value: item.id }))
    .sort((a, b) => a.label.localeCompare(b.label));
}