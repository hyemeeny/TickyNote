import type { Metadata } from 'next';
import localFont from 'next/font/local';
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryProvider>
      <html lang="ko">
        <body className={`${pretendard.variable}`}>
          <ThemeProviderWrapper>
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
