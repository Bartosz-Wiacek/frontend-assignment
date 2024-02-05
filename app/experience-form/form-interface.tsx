import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import React from "react";
import {Form as FormComponent} from "@/components/ui/form";
import {useFormContext} from "@/app/experience-form/form-context";
import {AutoComplete} from "@/components/ui/auto-complete";
import {Calendar} from "@/components/ui/calendar";
import {Textarea} from "@/components/ui/textarea";
import { mapArrayToAutoComplete, mapIndustriesToAutoComplete } from '@/lib/utils'
import { EMPLOYMENT_TYPES, LOCATION_TYPES, TEmployment, TLocation } from '@/app/experience-form/schema'
import { useIndustries } from '@/hooks/use-industries'
import { useRouter } from 'next/navigation'


const FormInterface = () => {
    const router = useRouter();
    const {form, onSubmit} = useFormContext()

    const { data } = useIndustries()

    const {
        register,
        setValue,
    } = form


    return (
        <FormComponent {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Company name</FormLabel>
                            <FormControl>
                                <Input placeholder="Company name" {...field} {...register("companyName")} />
                            </FormControl>
                            <FormDescription>
                                Company name must be between 1 and 50 characters.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="positionTitle"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Position title</FormLabel>
                            <FormControl>
                                <Input placeholder="Position title" {...field} {...register("positionTitle")} />
                            </FormControl>
                            <FormDescription>
                                Position title must be between 2 and 50 characters.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

              <FormField
                    control={form.control}
                    name="employmentType"
                    render={({ field }) => (
                        <FormItem className={"flex justify-between items-center"}>
                            <FormLabel>Employment type </FormLabel>
                            <FormControl>
                                <AutoComplete values={mapArrayToAutoComplete(EMPLOYMENT_TYPES)}
                                 onChange={(value) => setValue("employmentType", value as TEmployment)} value={field.value} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                        <FormItem className={"flex justify-between items-center"}>
                            <FormLabel>Location </FormLabel>
                            <FormControl>
                                <AutoComplete values={mapArrayToAutoComplete(LOCATION_TYPES) }
                                            onChange={(value) => setValue("location", value as TLocation)} value={field.value} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
              <div className="md:flex justify-between">
              <FormField
                    control={form.control}
                    name="startDate"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Start date</FormLabel>
                            <FormControl>
                                <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={(value) => value && setValue("startDate", value)}
                                    className="rounded-md border shadow"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="endDate"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>End date (optional)</FormLabel>
                            <FormControl>
                                <Calendar
                                    mode="single"
                                    selected={field.value}
                                    onSelect={(value) => value && setValue("endDate", value)}
                                    className="rounded-md border shadow"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
              </div>
                <FormField
                    control={form.control}
                    name="industry"
                    render={() => (
                        <FormItem className={"flex justify-between items-center"}>
                            <FormLabel>Industry </FormLabel>
                            <FormControl>
                                <AutoComplete values={mapIndustriesToAutoComplete(data)}
                            onChange={(_, label) => setValue("industry", label)} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Description" {...field} {...register("description")} />
                            </FormControl>
                            <FormDescription>
                              Description must be between 10 and 200 characters.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
              <div className="flex justify-between">
                <Button type="submit">Submit</Button>
                <Button onClick={() => router.push('/experience-overview')}>Experience overview</Button>
              </div>
            </form>
        </FormComponent>
    );
}

export default FormInterface;