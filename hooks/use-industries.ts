import {useQuery} from "@tanstack/react-query";
import {getIndustries} from "@/api/get-industries";

export interface TIndustry {
  name: string;
  id: string;
}

export const useIndustries = () => {
    return useQuery<TIndustry[]>({
       queryKey: ["industries"],
        queryFn: getIndustries,
    });
}