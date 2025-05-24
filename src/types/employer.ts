// types/employer.ts
import { User } from './user';

export interface Employer {
    employer_id: number;
    user_id: number;
    name_employer: string;
    description: string;
    number_of_employees: number;
    city_address: {
        city_address: string;
        specific_address: string;
    };
    status: string | null;
    updated_at: string | null;
    social_links: {
        website: string | null;
        facebook: string | null;
        linkedin: string | null;
    };
    branches: {
        id: number;
        name: string;
        city: string;
        specific_address: string;
    }[];
    industry: {
        industry_id: number;
        name: string;
    }[];
    interest: {
        salary: string;
        insurance: string;
        award: string;
    };
}

export interface EmployerWithUser {
    employer: Employer;
    user: User;
}

