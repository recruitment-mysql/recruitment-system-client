'use client';

import React, { useEffect, useState } from 'react';
import JobCard from '@/components/home/JobCard' // chỉnh đường dẫn nếu cần
import { Box, Typography, Chip, Stack, TextField, Select, MenuItem, Button, InputLabel, FormControl } from '@mui/material';

export default function JobPage() {
    const [jobs, setJobs] = useState<any[]>([]);
    const [selectedJob, setSelectedJob] = useState<any | null>(null);
    const [keyword, setKeyword] = useState('');
    const [location, setLocation] = useState('');

    useEffect(() => {
        fetch('/api/jobs')
            .then((res) => res.json())
            .then((data) => {
                setJobs(data);
                if (data.length > 0) setSelectedJob(data[0]);
            })
            .catch(() => {
                // Dữ liệu demo
                const demoJobs = [
                    {
                        job_id: '1',
                        title: 'Lập trình viên Frontend React.js',
                        description: 'Phát triển giao diện người dùng sử dụng React.js và Next.js...',
                        Salary: '15 triệu - 25 triệu',
                        company_name: 'Công ty ABC',
                        branches: [{ city: 'Hà Nội' }],
                        skills_required: [
                            { skill_id: '1', name: 'React' },
                            { skill_id: '2', name: 'JavaScript' },
                            { skill_id: '3', name: 'CSS' },
                            { skill_id: '4', name: 'Next.js' },
                        ],
                        requirements: [
                            'Tốt nghiệp đại học ngành CNTT',
                            'Kinh nghiệm React tối thiểu 1 năm',
                            'Hiểu biết về REST API',
                            'Kỹ năng làm việc nhóm và giao tiếp tốt',
                        ],
                    },
                    {
                        job_id: '2',
                        title: 'Chuyên viên Marketing',
                        description: 'Tham gia xây dựng chiến lược marketing và triển khai các chiến dịch...',
                        Salary: '10 triệu - 18 triệu',
                        company_name: 'Công ty XYZ',
                        branches: [{ city: 'TP. Hồ Chí Minh' }],
                        skills_required: [
                            { skill_id: '5', name: 'SEO' },
                            { skill_id: '6', name: 'Content Marketing' },
                        ],
                        requirements: [
                            'Tốt nghiệp chuyên ngành Marketing hoặc liên quan',
                            'Kinh nghiệm ít nhất 2 năm',
                            'Khả năng phân tích và lập kế hoạch',
                        ],
                    },
                ];
                setJobs(demoJobs);
                setSelectedJob(demoJobs[0]);
            });
    }, []);

    // Hàm lọc job theo keyword và location
    const filteredJobs = jobs.filter((job) => {
        const keywordMatch =
            keyword === '' ||
            job.title.toLowerCase().includes(keyword.toLowerCase()) ||
            job.company_name.toLowerCase().includes(keyword.toLowerCase());
        const locationMatch =
            location === '' || job.branches.some((b: any) => b.city === location);
        return keywordMatch && locationMatch;
    });

    const handleSelectJob = (job: any) => {
        setSelectedJob(job);
    };

    const handleSearchClick = () => {
        // Nếu muốn, có thể reset selectedJob hoặc để như hiện tại
        if (filteredJobs.length > 0) setSelectedJob(filteredJobs[0]);
        else setSelectedJob(null);
    };

    return (
        <Box
            sx={{
                maxWidth: 960,
                mx: 'auto',
                p: 3,
                fontFamily: 'Arial, sans-serif',
                color: '#333',
            }}
        >
            {/* Phần tìm kiếm */}
            <Box
                sx={{
                    display: 'flex',
                    gap: 2,
                    mb: 4,
                    flexWrap: 'wrap',
                    backgroundColor: '#f0f4ff',
                    p: 2,
                    borderRadius: 2,
                }}
            >
                <TextField
                    label="Tìm kiếm công việc, công ty, kỹ năng..."
                    variant="outlined"
                    size="small"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    sx={{ flexGrow: 1, minWidth: 200 }}
                />

                <FormControl size="small" sx={{ minWidth: 150 }}>
                    <InputLabel>Vị trí</InputLabel>
                    <Select
                        label="Vị trí"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    >
                        <MenuItem value="">Tất cả vị trí</MenuItem>
                        <MenuItem value="Hà Nội">Hà Nội</MenuItem>
                        <MenuItem value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</MenuItem>
                        <MenuItem value="Đà Nẵng">Đà Nẵng</MenuItem>
                    </Select>
                </FormControl>

                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSearchClick}
                    sx={{ minWidth: 100 }}
                >
                    Tìm kiếm
                </Button>
            </Box>

            {/* Bố cục 2 cột */}
            <Box
                sx={{
                    display: 'flex',
                    gap: 4,
                }}
            >
                {/* Cột trái: Danh sách công việc */}
                <Box
                    sx={{
                        width: '40%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        maxHeight: '80vh',
                        overflowY: 'auto',
                    }}
                >
                    {filteredJobs.length > 0 ? (
                        filteredJobs.map((job) => (
                            <JobCard key={job.job_id} job={job} onSelect={handleSelectJob} />
                        ))
                    ) : (
                        <Typography>Không tìm thấy công việc phù hợp.</Typography>
                    )}
                </Box>

                {/* Cột phải: Thông tin chi tiết công việc */}
                <Box
                    sx={{
                        width: '60%',
                        backgroundColor: '#fff',
                        border: '1px solid #ddd',
                        borderRadius: 2,
                        p: 3,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        maxHeight: '80vh',
                        overflowY: 'auto',
                    }}
                >
                    {selectedJob ? (
                        <>
                            <Typography variant="h5" sx={{ color: '#0a58ca', mb: 2 }}>
                                {selectedJob.title}
                            </Typography>

                            <Typography sx={{ mb: 2 }}>{selectedJob.description}</Typography>

                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                                Công ty:
                            </Typography>
                            <Typography sx={{ mb: 2 }}>{selectedJob.company_name}</Typography>

                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                                Địa điểm làm việc:
                            </Typography>
                            <Typography sx={{ mb: 2 }}>
                                {selectedJob.branches?.map((b: any) => b.city).join(', ')}
                            </Typography>

                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                                Mức lương:
                            </Typography>
                            <Typography sx={{ mb: 2 }}>{selectedJob.Salary}</Typography>

                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                                Kỹ năng yêu cầu:
                            </Typography>
                            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 2 }}>
                                {selectedJob.skills_required?.map((skill: any) => (
                                    <Chip
                                        key={skill.skill_id}
                                        label={skill.name}
                                        size="small"
                                        variant="outlined"
                                        sx={{ borderColor: 'primary.main', color: 'primary.main', fontSize: '0.75rem' }}
                                    />
                                ))}
                            </Stack>

                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                                Yêu cầu công việc:
                            </Typography>
                            <ul>
                                {selectedJob.requirements?.map((req: string, idx: number) => (
                                    <li key={idx}>{req}</li>
                                ))}
                            </ul>
                        </>
                    ) : (
                        <Typography>Chọn một công việc để xem chi tiết.</Typography>
                    )}
                </Box>
            </Box>
        </Box>
    );
}
