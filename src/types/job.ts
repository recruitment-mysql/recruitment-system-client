export interface Ibranchs {
    id: number;
    name: string;
    specific_address: string;
    city: string;
}
export interface IJob extends Document {
    job_id: string;
    employer_id: number;
    title: string;
    description : string;
    skills_required: number[];
    job_categories: number[];
    degree: number;
    experience_years_required: number;
    quantity : number;
    foreign_language? : string;
    Salary : number;
    job_type: number;
    status: number;
    branches:Ibranchs[];
    created_at: Date;
    updated_at: Date;
}