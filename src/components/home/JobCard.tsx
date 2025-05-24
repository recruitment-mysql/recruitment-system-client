import { Card, CardContent, Typography, Chip, Stack, Box, Avatar } from '@mui/material';
import { LocationOn, AttachMoney } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import avatarImg from '@/images/avatar.png';

const JobCard = ({ job }: { job: any }) => {
    const router = useRouter();

    const handleJobClick = () => {
        router.push(`/jobs/${job.job_id}`);
    };

    return (
        <Card
            onClick={handleJobClick}
            sx={{
                height: '100%',
                borderRadius: 3,
                boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease-in-out',
                cursor: 'pointer',
                border: '1px solid rgba(0,0,0,0.06)',
                '&:hover': {
                    boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                    transform: 'translateY(-4px)',
                    borderColor: 'primary.main',
                },
            }}
        >
            <CardContent sx={{ p: 3 }}>
                {/* Header với Avatar và HOT badge */}
                <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Avatar
                            src={avatarImg.src}
                            sx={{
                                width: 40,
                                height: 40,
                                bgcolor: 'primary.main'
                            }}
                        >
                            {job.company_name?.charAt(0) || 'C'}
                        </Avatar>
                        <Typography variant="body2" color="text.secondary" fontSize="0.875rem">
                            {job.company_name || 'Công ty'}
                        </Typography>
                    </Box>
                    <Chip
                        label="HOT ⭐"
                        size="small"
                        sx={{
                            bgcolor: '#ff4444',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '0.75rem'
                        }}
                    />
                </Box>

                {/* Job Title */}
                <Typography variant="h6" gutterBottom>
                    {job.title}
                </Typography>

                {/* Description */}
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
                    {job.description?.slice(0, 200)}...
                </Typography>

                {/* Salary with Icon */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <AttachMoney sx={{ fontSize: 18, color: 'success.main' }} />
                    <Typography variant="body2" fontWeight={600}>
                        {job.Salary}
                    </Typography>
                </Box>

                {/* Location with Icon */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <LocationOn sx={{ fontSize: 18, color: 'primary.main' }} />
                    <Typography variant="body2">
                        {job.branches?.map((b: { city: string }) => b.city).join(', ')}
                    </Typography>
                </Box>

                {/* Skills */}
                <Stack direction="row" spacing={1} mt={1} flexWrap="wrap" useFlexGap>
                    {job.skills_required?.slice(0, 3).map((skill: any) => (
                        <Chip
                            key={skill.skill_id}
                            label={skill.name}
                            size="small"
                            variant="outlined"
                            sx={{
                                borderColor: 'primary.main',
                                color: 'primary.main',
                                fontSize: '0.75rem'
                            }}
                        />
                    ))}
                    {job.skills_required?.length > 3 && (
                        <Chip
                            label={`+${job.skills_required.length - 3}`}
                            size="small"
                            sx={{
                                bgcolor: 'grey.100',
                                color: 'text.secondary',
                                fontSize: '0.75rem'
                            }}
                        />
                    )}
                </Stack>
            </CardContent>
        </Card>
    );
};

export default JobCard;