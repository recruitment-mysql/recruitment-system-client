import {jwtDecode} from 'jwt-decode';
import { useEffect, useState } from 'react';

type UserPayload = {
    id: number;
    email: string;
    name: string;
    avatar: string;
    role: number;
    exp?: number;
    iat?: number;
};

export const isValidToken = (accessToken: string | null): boolean => {
    if (!accessToken) return false;

    try {
        const decoded: UserPayload = jwtDecode(accessToken);
        if (!decoded.exp) return false;

        const currentTime = Date.now() / 1000; // s
        return decoded.exp > currentTime;
    } catch (error) {
        console.error('Invalid token:', error);
        return false;
    }
};

export const setSession = (accessToken: string | null) => {
    if (accessToken) {
        localStorage.setItem('accessToken', accessToken);
    } else {
        localStorage.removeItem('accessToken');
    }
};

export const getUserFromToken = (): UserPayload | null => {
    const token = localStorage.getItem('token');
    if (!token) return null;
    try {
        return jwtDecode<UserPayload>(token);
    } catch (error) {
        console.error('Token decode error:', error);
        return null;
    }
};

export const useAuth = () => {
    const [user, setUser] = useState<UserPayload | null>(null);

    useEffect(() => {
        const u = getUserFromToken();
        setUser(u);
    }, []);

    return { user };
};
