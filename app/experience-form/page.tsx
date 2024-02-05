'use client'
import React from "react";
import {Form} from "@/app/experience-form/form";
import {dehydrate, HydrationBoundary, QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {getIndustries} from "@/api/get-industries";


const ExperienceForm = async () => {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
        queryKey: ['industries'],
        queryFn: () => getIndustries(),
    })

  return (
  <QueryClientProvider client={queryClient}>
    <HydrationBoundary state={dehydrate(queryClient)}>
    <div className="p-4 xl:p-24">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-center text-eminence-default">
          Insert your experience
        </h1>
      </div>

      <div className="mt-24 mx-auto w-full max-w-2xl">
        <Form/>
      </div>
    </div>
    </HydrationBoundary>
  </QueryClientProvider>
  );
};

export default ExperienceForm;