import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { QueryProvider } from '@/providers/query';
import ThemeProviderWrapper from '@/providers/ThemeProviderWrapper';

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
          <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
        </body>
      </html>
    </QueryProvider>
  );
}
