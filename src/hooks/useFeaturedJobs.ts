import { useQuery } from '@apollo/client';
import { GET_FEATURED_JOBS } from '@/graphql/queries_job/GetFeaturedJobs';
import { IJob } from '@/types/job';

export const useFeaturedJobs = (page = 1, limit = 6) => {
    const { data, loading, error } = useQuery(GET_FEATURED_JOBS, {
        variables: { input: { page, limit } },
    });

    return {
        jobs: data?.getFeaturedJobs?.jobs as IJob[] || [],
        loading,
        error,
    };
};
