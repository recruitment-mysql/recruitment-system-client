'use client';

import {Container, Box, Typography} from '@mui/material';
import HeroSection from './HeroSection';
import FeaturedJobs from './FeaturedJobs';
import EmployerSection from "@/components/home/getFeaturedEmployer";

export default function HomeContent() {
    return (
        <Container maxWidth="lg">
            <HeroSection />
            <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Các cơ hội việc làm{' '}
                    nổi bật
                </Typography>
                <Typography color="text.secondary" fontSize="1.125rem">
                    Công việc hấp dẫn dành cho bạn
                </Typography>
            </Box>
            <FeaturedJobs />
            <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Nhà tuyển dụng nổi bật
                </Typography>
                <Typography color="text.secondary" fontSize="1.125rem">
                    Các nhà tuyển dụng hàng đầu dành cho bạn
                </Typography>
            </Box>
            <EmployerSection />
            {/* Add more sections like SearchJobs, Testimonials, etc. */}
        </Container>
    );
}
