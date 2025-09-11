'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '@/styles/theme';
import { GlobalStyle } from '@/styles/GlobalStyle';

interface ThemeProviderWrapperProps {
  children: ReactNode;
}

const ThemeProviderWrapper = ({ children }: ThemeProviderWrapperProps) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;
