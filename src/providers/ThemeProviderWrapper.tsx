'use client';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/styles/GlobalStyle';
import { useThemeStore } from '@/stores/useThemeStore';

const ThemeProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useThemeStore();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;
