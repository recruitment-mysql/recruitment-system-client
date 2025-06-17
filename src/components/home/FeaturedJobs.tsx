'use client';

import { Box, Typography, Grid } from '@mui/material';
import JobCard from './JobCard';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import ErrorMessage from '@/components/common/ErrorMessage';
import { useFeaturedJobs } from '@/hooks/useFeaturedJobs';

export default function FeaturedJobs() {
    const { jobs, loading, error } = useFeaturedJobs();

    if (loading) return <LoadingSpinner />;
    if (error) return <ErrorMessage message="Error loading featured jobs." />;

    return (
        <Box sx={{ my: 5 }}>
            <Grid container spacing={3}>
                {jobs.map(job => (
                    <Grid item xs={12} md={6} key={job.job_id}>
                        <JobCard job={job} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
