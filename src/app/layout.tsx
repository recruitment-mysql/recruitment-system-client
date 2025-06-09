'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import ClientProviders from '@/components/ApolloClientProvider';

import Header from '@/components/layout/Header';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import EmployerHeader from '@/components/layout/EmployerHeader';

import { getUserFromToken } from '@/lib/jwt';
import { roleID } from '@/lib/enum';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();
    const [userRole, setUserRole] = useState<number | null>(null);

    useEffect(() => {
        const user = getUserFromToken();
        setUserRole(user?.role ?? null);

        const protectedRoutes = ['/admin', '/candidate', '/company/profile'];

        const isProtected = protectedRoutes.some((path) => pathname.startsWith(path));
        if (!user && isProtected) {
            router.push('/login');
        } else if (pathname.startsWith('/admin') && user?.role !== roleID.ADMIN) {
            router.push('/');
        } else if (pathname.startsWith('/employer') && user?.role !== roleID.EMPLOYER) {
            router.push('/');
        }
    }, [pathname, router]);

    const isEmployer = userRole === roleID.EMPLOYER;
    const isEmployerRoute = pathname.startsWith('/company');

    return (
        <html lang="en">
        <body>
        <ClientProviders>
            {isEmployer && isEmployerRoute ? (
                <>
                    <EmployerHeader />
                    <main>{children}</main>
                </>
            ) : (
                <>
                    <Header />
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </>
            )}
        </ClientProviders>
        </body>
        </html>
    );
}