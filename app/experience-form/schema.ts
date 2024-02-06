import * as z from "zod";

export const EMPLOYMENT_TYPES = ["full-time", "part-time", "student"] as const;

const EmploymentType = z.enum(EMPLOYMENT_TYPES);

export type TEmployment = z.infer<typeof EmploymentType>

export const LOCATION_TYPES = ["remote", "on-site", "hybrid"] as const;

const LocationType = z.enum(LOCATION_TYPES);

export type TLocation = z.infer<typeof LocationType>

export type TExperience = z.infer<typeof schema>;

export const schema = z.object({
    companyName: z.string().min(1, "Company name must be at least 1 character").max(50, "Company name must be max 50 character"),
    positionTitle: z.string().min(2, "Position title name must be at least 2 character").max(50, "Position title name must be max 50 character"),
    employmentType: EmploymentType,
    location: LocationType,
    startDate: z.date(),
    endDate: z.date().optional(),
    industry: z.string(),
    description: z.string().min(10, "Description must be at least 10 character").max(200, "Description name must be max 200 character"),
});