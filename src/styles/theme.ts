import { DefaultTheme } from 'styled-components';

export const colors = {
  text: '#2b2b2b',
  background: '#e2e2e2',
  main: '#2196F3',
  sub: '#1E88E5',
  point: '#1E88E5',
  gray: '#B0BEC5',
  red: '#E53935',
};

export const lightTheme: DefaultTheme = {
  colors,
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
};
