import { DefaultTheme } from 'styled-components';

export const colors = {
  text: '#2b2b2b',
  textSub: '#999999',
  background: '#ffffff',
  point: '#7CB342',
  gray: '#B0BEC5',
  red: '#E53935',
  themeBg: '#83d8ff',
  themeIcon: '#ffcf96',
};

export const lightTheme: DefaultTheme = {
  colors,
};

export const darkTheme: DefaultTheme = {
  colors: {
    ...colors,
    text: '#ffffff',
    textSub: '#dddddd',
    background: '#000000',
    themeBg: '#6b65a7',
    themeIcon: '#ffe5b5',
  },
};
