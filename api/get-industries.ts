import { TIndustry } from '@/hooks/use-industries'

export const getIndustries = async (): Promise<TIndustry[]> => {
    const response = await fetch("https://api.staging.excelerate.dk/industries");

    return await response.json();
}