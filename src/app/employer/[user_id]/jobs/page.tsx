'use client';

import { useParams } from 'next/navigation';

export default function EmployerJobsPage() {
    const params = useParams();
    const employerId = params.id;

    return (
        <div>
            <h1>Danh sách tin tuyển dụng</h1>
            <p>Employer ID: {employerId}</p>
            <ul>
                <li>Job 1 - Frontend Developer</li>
                <li>Job 2 - Backend Developer</li>
                <li>Job 3 - Product Manager</li>
            </ul>
        </div>
    );
}
