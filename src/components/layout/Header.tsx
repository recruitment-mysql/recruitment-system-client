'use client';

import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Avatar,
    Drawer,
    List,
    ListItem,
    ListItemText,
    useMediaQuery,
    useTheme,
    Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useUser } from '@/hooks/getUser';

const navItems = [
    { label: 'Việc làm', href: '/jobs' },
    { label: 'Công ty', href: '/companies' },
    { label: 'Tư vấn sự nghiệp', href: '/career-advice' },
    { label: 'Blog', href: '/blog' },
];

export default function Header() {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) return null;

    return <HeaderContent />;
}

function HeaderContent() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const { user, loading } = useUser();
    console.log('user', user);

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElUser(event.currentTarget);
    const handleCloseUserMenu = () => setAnchorElUser(null);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setAnchorElUser(null);
        location.reload();
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', width: 250 }}>
            <Typography
                variant="h5"
                component={Link}
                href="/"
                sx={{ fontWeight: 700, color: 'primary.main', p: 2, display: 'block', textDecoration: 'none' }}
            >
                FreeC
            </Typography>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItem button component={Link} href={item.href}>
                            <ListItemText primary={item.label} />
                        </ListItem>
                    </ListItem>
                ))}

                {!loading && !user && (
                    <>
                        <ListItem disablePadding>
                            <ListItem button component={Link} href="/login">
                                <ListItemText primary="Đăng nhập" />
                            </ListItem>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItem button component={Link} href="/register">
                                <ListItemText primary="Đăng ký" />
                            </ListItem>
                        </ListItem>
                    </>
                )}
            </List>
        </Box>
    );

    return (
        <>
            <AppBar position="sticky" color="default" elevation={1}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                        <Typography
                            variant="h6"
                            component={Link}
                            href="/"
                            sx={{ textDecoration: 'none', color: 'primary.main', fontWeight: 'bold', mr: 3 }}
                        >
                            FreeC
                        </Typography>

                        {!isMobile && (
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                {navItems.map((item) => (
                                    <Button key={item.label} component={Link} href={item.href} color="inherit">
                                        {item.label}
                                    </Button>
                                ))}
                            </Box>
                        )}
                    </Box>

                    {!isMobile && (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            {loading ? null : user ? (
                                <>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <Typography variant="body1" fontWeight={500}>
                                            {user.full_name}
                                        </Typography>
                                        <IconButton onClick={handleOpenUserMenu} size="small">
                                            <Avatar src={user.avatar || undefined}>
                                                {user.full_name?.charAt(0).toUpperCase() || '?'}
                                            </Avatar>
                                        </IconButton>
                                    </Box>

                                    <Menu
                                        anchorEl={anchorElUser}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                        sx={{ mt: 1.5 }}
                                    >
                                        <Box sx={{ px: 2, py: 1.5 }}>
                                            <Typography variant="subtitle1" fontWeight="bold">
                                                {user.full_name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {user.email}
                                            </Typography>
                                        </Box>
                                        <Divider />
                                        <MenuItem onClick={handleCloseUserMenu} component={Link} href="/change-password">
                                            Đổi mật khẩu
                                        </MenuItem>
                                        <MenuItem onClick={handleCloseUserMenu} component={Link} href="/account">
                                            Quản lý tài khoản
                                        </MenuItem>
                                        <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
                                    </Menu>
                                </>
                            ) : (
                                <>
                                    <Button component={Link} href="/login" color="primary" variant="outlined" size="small">
                                        Đăng nhập
                                    </Button>
                                    <Button component={Link} href="/register" color="primary" variant="contained" size="small">
                                        Đăng ký
                                    </Button>
                                </>
                            )}
                        </Box>
                    )}

                    {isMobile && (
                        <IconButton color="inherit" edge="end" onClick={handleDrawerToggle}>
                            <MenuIcon />
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>

            <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle} ModalProps={{ keepMounted: true }}>
                {drawer}
            </Drawer>
        </>
    );
}
