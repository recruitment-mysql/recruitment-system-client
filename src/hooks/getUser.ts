'use client';

import { useQuery } from '@apollo/client';
import { GET_USER } from '@/graphql/queries_user/getUser';
import {useEffect, useState} from 'react';
import { useRouter } from 'next/navigation';

export function useUser() {
    const router = useRouter();
    const [shouldQuery, setShouldQuery] = useState(false);

    useEffect(() => {
        setShouldQuery(true);
    }, []);

    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

    const { data, loading, error, refetch } = useQuery(GET_USER, {
        skip: !shouldQuery || !token,
        fetchPolicy: 'cache-and-network',
    });

    useEffect(() => {
        if (error) {
            const hasAuthError = error.graphQLErrors?.some(
                (err) => err.extensions?.code === 'UNAUTHENTICATED' || err.message.includes('Unauthorized')
            );

            if (hasAuthError) {
                console.warn('Token invalid or expired, logging out...');
                localStorage.removeItem('token');
                router.refresh();
            } else {
                console.error('Lỗi lấy user:', error);
            }
        }
    }, [error, router]);

    return {
        user: data?.getUser ?? null,
        loading,
        error,
        refetch,
    };
}


