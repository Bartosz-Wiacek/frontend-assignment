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

export function monthNumberToString(month: number) {
  switch (month) {
    case 1:
      return "Jan";
    case 2:
      return "Feb";
    case 3:
      return "Mar";
    case 4:
      return "Apr";
    case 5:
      return "May";
    case 6:
      return "Jun";
    case 7:
      return "Jul";
    case 8:
      return "Aug";
    case 9:
      return "Sep";
    case 10:
      return "Oct";
    case 11:
      return "Nov";
    case 12:
      return "Dec";
    default:
      return "Jan";
  }
}

export function differenceInYearsAndMonths (start: string | Date, end: string | Date) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const years = endDate.getFullYear() - startDate.getFullYear();
  const months = Math.abs(endDate.getMonth() - startDate.getMonth());
  if (months == 0 && years == 0) {
    return 1 + " " + "mo";
  }
  return years + "yr" + " " + months + " " + "mo";
}