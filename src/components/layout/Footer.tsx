// /components/layout/Footer.tsx
import React from 'react';
import { Box, Container, Typography, Link as MuiLink, Stack, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: 'grey.100',
                py: 4,
                mt: 6,
                borderTop: 1,
                borderColor: 'grey.300',
            }}
        >
            <Container maxWidth="lg">
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                >
                    <Typography variant="body2" color="text.secondary" align="center">
                        © 2025 FreeC. All rights reserved.
                    </Typography>

                    <Stack direction="row" spacing={2} alignItems="center">
                        <MuiLink component={Link} href="/contact" color="inherit" underline="hover">
                            Liên hệ
                        </MuiLink>

                        <Link href="/privacy" passHref legacyBehavior>
                            <MuiLink color="inherit" underline="hover">
                                Chính sách bảo mật
                            </MuiLink>
                        </Link>
                        <Link href="/terms" passHref legacyBehavior>
                            <MuiLink color="inherit" underline="hover">
                                Điều khoản sử dụng
                            </MuiLink>
                        </Link>
                    </Stack>

                    <Stack direction="row" spacing={1}>
                        <IconButton color="primary" component="a" href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FacebookIcon />
                        </IconButton>
                        <IconButton color="primary" component="a" href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <TwitterIcon />
                        </IconButton>
                        <IconButton color="primary" component="a" href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <InstagramIcon />
                        </IconButton>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}
