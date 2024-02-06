'use client'
import { TExperience } from '@/app/experience-form/schema'
import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link'
import { differenceInYearsAndMonths, monthNumberToString } from '@/lib/utils'


const ExperienceBlocks = () => {

  const form: TExperience[] = JSON.parse(localStorage.getItem("form") || "[]");

  if (form.length === 0) {
    return <div>No experience</div>;
  }

  return (
    <>
        <div>
          {form.map((form: TExperience, index: number) => (
            <div key={index} className="m-8 space-y-1">
                <p className="font-medium">{form.positionTitle}</p>
              <div className="border-t border-gray-200"></div>
              <div className="flex gap-4 font-light">
                <p>{form.companyName}</p>
                <p>{form.industry}</p>
                <p>{form.employmentType}</p>
              </div>
              <div className="flex gap-1 font-light text-stone-700">
                <p>{monthNumberToString((new Date(form.startDate).getMonth() + 1))}</p>
                <p>{(new Date(form.startDate).getFullYear())}</p>
                {form.endDate ? (
                  <>
                    <p>-</p>
                    <p>{monthNumberToString(new Date(form.endDate).getMonth() + 1)}</p>
                    <p>{new Date(form.endDate).getFullYear()}</p>
                    <p>•</p>
                    <p>{differenceInYearsAndMonths(form.startDate, form.endDate)}</p>
                  </>
                ) : (
                  <p>- present</p>
                )}
              </div>
                <p className="flex gap-1 font-light text-stone-700">{form.location}</p>
                <p className="font-light text-sm">{form.description}</p>
            </div>
          ))}
        </div>
      <Link className="text-violet-default" href="/experience-form">
        <Button>Experience form</Button>
      </Link>
    </>
  );
}

export default ExperienceBlocks;