// types/common.ts
export interface Address {
    city_address: string;
    specific_address: string;
}

export interface PaginationInfo {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
}

export interface Industry {
    industry_id: string;
    name: string;
}

export interface SocialLinks {
    website?: string;
    facebook?: string;
    linkedin?: string;
}

export interface Interest {
    salary?: string;
    insurance?: string;
    award?: string;
}

export interface Branch {
    id: string;
    name: string;
    city: string;
    specific_address: string;
}
