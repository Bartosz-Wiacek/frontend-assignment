import React from "react";
import {Form} from "@/app/experience-form/form";
import {getIndustries} from "@/api/get-industries";
import { ReactQueryProvider } from '@/providers/react-query-provider'


const ExperienceForm = async () => {
    const industries = await getIndustries()

  return (
  <ReactQueryProvider queries={[{key: "industries", data: industries}]}>
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
  </ReactQueryProvider>
  );
};

export default ExperienceForm;