// components/home/Hero.tsx
'use client';

import { Box, Typography, Button, TextField, InputAdornment, Chip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';
import heroImg from '@/images/hero-illustration.jpg';
import React from 'react';

export default function Hero() {
    return (
        <Box
            component="section"
            sx={{
                position: 'relative',
                width: '100vw',
                left: '50%',
                right: '50%',
                marginLeft: '-50vw',
                marginRight: '-50vw',
                bgcolor: '#f6f4fc',
                outline: '4px solid #1976d2',
                outlineOffset: '-4px',
                py: 8,
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    px: { xs: 2, md: 4 },
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 4,
                }}
            >
                {/* Left Content */}
                <Box sx={{ flex: 1, minWidth: 280 }}>
                    <Typography variant="h3" fontWeight="bold" mb={2} lineHeight={1.2}>
                        Tìm kiếm  việc làm {' '}
                        mơ ước
                    </Typography>
                    <Typography color="text.secondary" mb={4} fontSize="1.125rem">
                        Hàng ngàn vị trí hấp dẫn dành cho bạn
                    </Typography>

                    {/* Search Bar */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            borderRadius: 3,
                            boxShadow: 3,
                            maxWidth: 500,
                            overflow: 'hidden',
                            mb: 2,
                        }}
                    >
                        <TextField
                            placeholder="Tìm theo việc làm, công ty, kỹ năng..."
                            variant="outlined"
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon color="action" />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{ bgcolor: 'white', border: 'none' }}
                        />
                        <Button variant="contained" sx={{ borderRadius: 0, px: 4, bgcolor: 'primary.main' }}>
                            Tìm kiếm
                        </Button>
                    </Box>

                    {/* Tags */}
                    <Box sx={{ mt: 1, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                        {['Marketing', 'Sales', 'Java', 'Android', 'iOS', 'Python'].map((tag) => (
                            <Chip key={tag} label={tag} variant="outlined" size="small" />
                        ))}
                    </Box>
                </Box>

                {/* Right Content */}
                <Box sx={{ flex: 1, minWidth: 280, position: 'relative' }}>
                    <Image
                        src={heroImg}
                        alt="Hero Illustration"
                        style={{ width: '100%', height: 'auto', borderRadius: 8 }}
                        priority
                    />

                    {/* Floating Card Example */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '20%',
                            right: '10%',
                            bgcolor: 'white',
                            px: 2,
                            py: 1,
                            borderRadius: 2,
                            boxShadow: 3,
                            cursor: 'pointer',
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-5px)',
                                boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                            },
                        }}
                    >
                        <Typography fontWeight="bold" fontSize="0.9rem">
                            Backend Developer
                        </Typography>
                        <Typography fontSize="0.8rem" color="text.secondary">
                            218 Lĩnh Nam
                        </Typography>
                        <Typography fontSize="0.8rem" color="error" fontWeight="bold">
                            Apply
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}