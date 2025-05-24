'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Box, Typography, Avatar, CircularProgress, Paper } from '@mui/material';

async function fetchEmployerProfile(id: string) {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id,
                name_employer: 'Công ty TNHH ABC',
                description: 'Công ty ABC chuyên về phát triển phần mềm, cung cấp giải pháp công nghệ hàng đầu.',
                logo_url: 'https://via.placeholder.com/120x80?text=Logo+ABC',
                address: '123 Đường A, Quận B, TP. HCM',
                website: 'https://abccompany.example',
                email: 'contact@abccompany.example',
                phone: '0123 456 789',
            });
        }, 1000);
    });
}

export default function EmployerCompanyPage() {
    const { id } = useParams();
    const [company, setCompany] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        fetchEmployerProfile(id).then((data) => {
            setCompany(data);
            setLoading(false);
        });
    }, [id]);

    if (loading) return <CircularProgress sx={{ mt: 4, display: 'block', mx: 'auto' }} />;

    if (!company) return <Typography sx={{ mt: 4, textAlign: 'center' }}>Không tìm thấy thông tin công ty</Typography>;

    return (
        <Paper sx={{ maxWidth: 700, mx: 'auto', mt: 4, p: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Avatar
                    src={company.logo_url}
                    alt={company.name_employer}
                    variant="square"
                    sx={{ width: 120, height: 80 }}
                />
                <Typography variant="h5" fontWeight="bold">{company.name_employer}</Typography>
            </Box>
            <Typography variant="body1" paragraph>{company.description}</Typography>
            <Typography variant="subtitle2" fontWeight="bold" gutterBottom>Thông tin liên hệ:</Typography>
            <Typography>Địa chỉ: {company.address}</Typography>
            <Typography>Website: <a href={company.website} target="_blank" rel="noopener noreferrer">{company.website}</a></Typography>
            <Typography>Email: {company.email}</Typography>
            <Typography>Điện thoại: {company.phone}</Typography>
        </Paper>
    );
}
