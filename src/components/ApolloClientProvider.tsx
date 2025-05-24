// src/components/ApolloClientProvider.tsx
'use client';

import { ReactNode } from 'react';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider, CssBaseline } from '@mui/material';
import client from '@/lib/apolloClient';
import theme from '@/styles/theme';
import EmotionProvider from './EmotionProvider';

export default function ClientProviders({ children }: { children: ReactNode }) {
    return (
        <EmotionProvider>
            <ApolloProvider client={client}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </ApolloProvider>
        </EmotionProvider>
    );
}