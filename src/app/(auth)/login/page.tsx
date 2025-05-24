'use client';

import { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography, Stack, Alert } from '@mui/material';
import { useLogin } from '@/hooks/login';
import { useRouter } from 'next/navigation';
import {roleID} from "@/lib/enum";

export default function Page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const router = useRouter();
    const { login, data, loading, error } = useLogin();
    console.log('error ' , );

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);

        login({ variables: { input: { email, password } } });
    };

    useEffect(() => {
        if (data?.login?.token) {
            const token = data.login.token;
            const user = data.login.user;

            localStorage.setItem('token', token);

            if (user.role === roleID.CANDIDATE) {
                window.location.href = '/';
            } else if (user.role === roleID.EMPLOYER) {
                window.location.href = `/employer/${user.user_id}/jobs`;
            } else if (user.role === roleID.ADMIN) {
                window.location.href = '/admin/dashboard';
            }
        }
    }, [data]);


    return (
        <Box maxWidth={400} mx="auto" mt={10} p={3} boxShadow={2} borderRadius={2} bgcolor="#fff">
            <Typography variant="h5" textAlign="center" mb={2}>
                Đăng nhập
            </Typography>

            <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
                    <TextField
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <TextField
                        label="Mật khẩu"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {submitted && error && (
                        <Alert severity="error">Sai thông tin đăng nhập. Vui lòng thử lại.</Alert>
                    )}
                    <Button type="submit" variant="contained" fullWidth disabled={loading}>
                        {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
                    </Button>
                </Stack>
            </form>
        </Box>
    );
}
