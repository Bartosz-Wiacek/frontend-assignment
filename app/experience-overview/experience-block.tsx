import { TExperience } from '@/app/experience-form/schema'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useRouter } from 'next/navigation'


const ExperienceBlock = () => {
  const router = useRouter();

  const form = JSON.parse(localStorage.getItem("form") || "[]");

  if (form.length === 0) {
    return <div>No experience</div>;
  }

  const monthNumberToString = (month: number) => {
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

  const differenceInYearsAndMonths = (startDate: Date, endDate: Date) => {
    const years = endDate.getFullYear() - startDate.getFullYear();
    const months = Math.abs(endDate.getMonth() - startDate.getMonth());
    if (months == 0 && years == 0) {
      return 1 + " " + "mo";
    }
    return years + "yr" + " " + months + " " + "mo";
  }

  return (
    <>
      {localStorage.getItem("form") !== null && (
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
                    <p>{differenceInYearsAndMonths(new Date(form.startDate), new Date(form.endDate))}</p>
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
      )}
      <Button onClick={() => router.push('/experience-form')}>Experience form</Button>
    </>
  );
}

export default ExperienceBlock;