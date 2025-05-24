'use client';
import { Box, Grid, Typography } from '@mui/material';
import EmployerCard from './EmployerCard';
import { useFeaturedEmployers } from '@/hooks/useFeaturedEmployers';
import {EmployerWithUser} from "@/types";

export default function EmployerSection() {
    const { employers, loading } = useFeaturedEmployers(1, 6);

    if (loading) return <Typography textAlign="center">Đang tải nhà tuyển dụng...</Typography>;

    return (
        <Box py={10} px={{ xs: 2, md: 6 }} bgcolor="#fafafa">
            {/* Header */}
            <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Nhà tuyển dụng nổi bật
                </Typography>
                <Typography color="text.secondary" fontSize="1.125rem">
                    Các nhà tuyển dụng hàng đầu dành cho bạn
                </Typography>
            </Box>

            {/* Grid employer */}
            <Grid container spacing={3}>
                {(employers as EmployerWithUser[]).map(({ employer, user }) => (
                    <Grid item key={employer.employer_id} xs={12} sm={6} md={4}>
                        <EmployerCard employer={employer} user={user} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );

}
