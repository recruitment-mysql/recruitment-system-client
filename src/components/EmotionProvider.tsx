'use client';

import { CacheProvider } from '@emotion/react';
import { ReactNode } from 'react';
import createEmotionCache from '@/lib/emotionCache';

const clientSideEmotionCache = createEmotionCache();

export default function EmotionProvider({ children }: { children: ReactNode }) {
    return (
        <CacheProvider value={clientSideEmotionCache}>
            {children}
        </CacheProvider>
    );
}
