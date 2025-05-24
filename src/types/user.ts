export interface User {
    user_id: number;
    email: string;
    password_hash: string;
    number_phone: string;
    full_name: string;
    role: number;
    avatar: string
    status: boolean;
    created_at?: Date;
    updated_at?: Date;
}