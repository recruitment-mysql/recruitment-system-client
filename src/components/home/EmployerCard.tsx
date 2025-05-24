// components/home/EmployerCard.tsx
'use client';

import {Avatar, Box, Button, Card, CardActions, CardContent, Chip, Stack, Typography} from '@mui/material';
import { useRouter } from 'next/navigation';
import {Employer, User} from '@/types';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';

interface EmployerCardProps {
    employer: Employer;
    user: User;
}

export default function EmployerCard({ employer, user }: EmployerCardProps) {
    const router = useRouter();
    const avatarUrl = user?.avatar;

    return (
        <Card
            sx={{
                borderRadius: 3,
                boxShadow: 3,
                transition: '0.3s',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6,
                },
            }}
        >
            <CardContent>
                <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                    <Avatar src={avatarUrl || undefined} alt={employer.name_employer} sx={{ width: 56, height: 56 }}>
                        {!avatarUrl && <BusinessIcon />}
                    </Avatar>
                    <Box>
                        <Typography fontWeight="bold">{employer.name_employer}</Typography>
                        <Stack direction="row" spacing={1} mt={1} flexWrap="wrap" useFlexGap>
                            {employer.industry?.slice(0, 3).map((ind) => (
                                <Chip
                                    key={ind.industry_id}
                                    label={ind.name}
                                    size="small"
                                    variant="outlined"
                                    sx={{
                                        borderColor: 'primary.main',
                                        color: 'primary.main',
                                        fontSize: '0.75rem',
                                    }}
                                />
                            ))}
                            {employer.industry && employer.industry.length > 3 && (
                                <Chip
                                    label={`+${employer.industry.length - 3}`}
                                    size="small"
                                    sx={{
                                        bgcolor: 'grey.100',
                                        color: 'text.secondary',
                                        fontSize: '0.75rem',
                                    }}
                                />
                            )}
                        </Stack>
                    </Box>
                </Stack>

                <Typography variant="body2" color="text.secondary" mb={1}>
                    {employer.description}
                </Typography>

                <Stack direction="row" spacing={1} alignItems="center" mt={1}>
                    <LocationOnIcon fontSize="small" color="action" />
                    <Typography variant="caption" color="text.secondary">
                        {employer.city_address?.city_address}
                    </Typography>
                </Stack>
            </CardContent>

            <CardActions sx={{ justifyContent: 'center' }}>
                <Button
                    variant="outlined"
                    size="small"
                    onClick={() => router.push(`/employers/${employer.employer_id}`)}
                >
                    Xem chi tiết
                </Button>
            </CardActions>
        </Card>
    );
}
