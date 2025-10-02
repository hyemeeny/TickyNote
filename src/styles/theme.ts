import { DefaultTheme } from 'styled-components';

export const breakpoints = {
  mobile: '768px',
  tablet: '992px',
  desktop: '1200px',
};

export const colors = {
  text: '#2b2b2b',
  background: '#e2e2e2',
  main: '#2196F3',
  sub: '#1E88E5',
  point: '#1E88E5',
};

export const font = {
  size: {
    sm: '0.75rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
  },
};

export const lightTheme: DefaultTheme = {
  colors,
  font,
  breakpoints,
};

export const darkTheme: DefaultTheme = {
  colors: {
    ...colors,
    text: '#f5f5f5',
    background: '#3b0046ff',
    main: '#9C27B0',
    sub: '#7B1FA2',
    point: '#7B1FA2',
  },
  font,
  breakpoints,
};
