'use client';

import { useState } from 'react';
import {
    Box,
    Stack,
    Typography,
    Avatar,
    Menu,
    MenuItem,
    Divider,
    IconButton,
} from '@mui/material';
import { useRouter } from 'next/navigation'; // ✅ Thêm useRouter
import { getUserFromToken } from '@/lib/jwt';
import { useUserProfile } from '@/hooks/useUserProfile';
import employer_logo from '@/images/employer_logo.png';

export default function EmployerHeader() {
    const tokenUser = getUserFromToken();
    const userId = tokenUser?.id;

    const { userProfile, loading, error } = useUserProfile(userId);
    const router = useRouter();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading user data</div>;

    const user = userProfile?.user;
    const employerProfile = userProfile?.employerProfile;

    const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleAvatarClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        // TODO: xử lý logout
        console.log('Logout clicked');
    };

    const handleGoToCompanyPage = () => {
        if (userId) {
            router.push(`/employer/${userId}/company`);
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: 3,
                py: 1,
                bgcolor: 'background.paper',
                boxShadow: 1,
                color: 'text.primary'
            }}
        >
            {/* Logo bên trái */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={employer_logo.src} alt="Employer Logo" style={{ height: 40 }} />
            </Box>

            {/* Menu giữa */}
            <Stack direction="row" spacing={4} sx={{ flexGrow: 1, justifyContent: 'center' }}>
                <Typography variant="button" sx={{ cursor: 'pointer' }}>
                    Tin tuyển dụng
                </Typography>
                <Typography variant="button" sx={{ cursor: 'pointer' }}>
                    Ứng viên
                </Typography>
                <Typography variant="button" sx={{ cursor: 'pointer' }}>
                    Giải pháp tuyển dụng
                </Typography>
            </Stack>

            {/* Bên phải: avatar + company info */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                {/* Logo nhỏ + tên công ty (click để chuyển trang) */}
                <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={handleGoToCompanyPage}>
                    {user?.avatar && (
                        <img src={user?.avatar} alt="Company Logo" style={{ height: 24, marginRight: 8 }} />
                    )}
                    <Typography variant="body2" fontWeight="bold">
                        {employerProfile?.name_employer || 'Tên công ty'}
                    </Typography>
                </Box>

                {/* Avatar */}
                <IconButton onClick={handleAvatarClick} size="small" sx={{ ml: 2 }}>
                    <Avatar src={user?.avatar} alt={user?.full_name || 'User'} />
                </IconButton>

                {/* Dropdown menu */}
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleAvatarClose}
                    PaperProps={{ sx: { width: 240, p: 1 } }}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1, px: 1 }}>
                        <Avatar src={user?.avatar} alt={user?.full_name} sx={{ width: 48, height: 48 }} />
                        <Box>
                            <Typography variant="subtitle1">{user?.full_name}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                {user?.email}
                            </Typography>
                        </Box>
                    </Box>
                    <Divider />
                    <MenuItem onClick={() => console.log('Change password clicked')}>Đổi mật khẩu</MenuItem>
                    <MenuItem onClick={() => console.log('Company account clicked')}>Tài khoản công ty</MenuItem>
                    <Divider />
                    <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
                </Menu>
            </Box>
        </Box>
    );
}
