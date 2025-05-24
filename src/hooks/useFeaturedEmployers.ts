// hooks/useFeaturedEmployers.ts
import { useQuery } from '@apollo/client';
import { GET_FEATURED_EMPLOYERS } from '@/graphql/queries_candidate/GetFeaturedEmployers';
import { EmployerWithUser } from '@/types/employer';

export const useFeaturedEmployers = (page = 1, limit = 6) => {
    const { data, loading, error } = useQuery(GET_FEATURED_EMPLOYERS, {
        variables: { input: { page, limit } },
    });

    return {
        employers: (data?.getFeaturedEmployers?.employerResult || []) as EmployerWithUser[],
        pagination: data?.getFeaturedEmployers?.pagination,
        loading,
        error,
    };
};
