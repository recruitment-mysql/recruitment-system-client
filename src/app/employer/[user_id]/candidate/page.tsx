'use client';

import { useParams } from 'next/navigation';

export default function EmployerCandidatesPage() {
    const params = useParams();
    const employerId = params.id;

    return (
        <div>
            <h1>Danh sách ứng viên</h1>
            <p>Employer ID: {employerId}</p>
            {/* Hiển thị danh sách ứng viên */}
            <ul>
                <li>Ứng viên A</li>
                <li>Ứng viên B</li>
                <li>Ứng viên C</li>
            </ul>
        </div>
    );
}
