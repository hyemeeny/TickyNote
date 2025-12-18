'use client';

import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/styles/GlobalStyle';
import { useThemeStore } from '@/stores/useThemeStore';
import { ThemeProviderWrapperProps } from '@/types/ticky';

const ThemeProviderWrapper = ({
  children,
  initialMode,
}: ThemeProviderWrapperProps) => {
  const { setMode, theme } = useThemeStore();

  useEffect(() => {
    setMode(initialMode);
  }, [initialMode, setMode]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;
