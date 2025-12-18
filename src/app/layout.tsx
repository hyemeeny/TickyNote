import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { cookies } from 'next/headers';
import localFont from 'next/font/local';
import { ThemeMode } from '@/types/ticky';
import { QueryProvider } from '@/providers/query';
import ThemeProviderWrapper from '@/providers/ThemeProviderWrapper';
import Container from '@/components/Container';
import Header from '@/components/Header';

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '100 900',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: 'TickyNote',
  description: 'TickyNote',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const cookieStore = await cookies();
  const cookieTheme = cookieStore.get('theme')?.value;
  const theme: ThemeMode = cookieTheme === 'dark' ? 'dark' : 'light';

  return (
    <QueryProvider>
      <html lang="ko">
        <body className={`${pretendard.variable}`}>
          <ThemeProviderWrapper initialMode={theme}>
            <Container>
              <Header />
              {children}
            </Container>
          </ThemeProviderWrapper>
        </body>
      </html>
    </QueryProvider>
  );
}
