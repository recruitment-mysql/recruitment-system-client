'use client';

import { Container, Box } from '@mui/material';
import HeroSection from './HeroSection';
import FeaturedJobs from './FeaturedJobs';
import EmployerSection from "@/components/home/getFeaturedEmployer";

export default function HomeContent() {
    return (
        <Container maxWidth="lg">
            <HeroSection />
            <FeaturedJobs />
            <EmployerSection />
            {/* Add more sections like SearchJobs, Testimonials, etc. */}
        </Container>
    );
}
