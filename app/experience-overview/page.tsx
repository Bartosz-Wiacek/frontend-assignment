'use client'
import React from "react";
import ExperienceBlock from '@/app/experience-overview/experience-block'

const ExperienceOverview = () => {

  return (
    <div className="p-4 xl:p-24">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-center text-eminence-default">
          Experience
        </h1>
      </div>

      <div className="mt-24 mx-auto w-full max-w-2xl">
        <ExperienceBlock />
      </div>
    </div>
  );
};

export default ExperienceOverview;