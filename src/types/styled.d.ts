import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    colors: {
      text: string;
      background: string;
      main: string;
      sub: string;
      point: string;
      gray: string;
      red: string;
    };
    fontSizes: {
      'xs': string;
      'sm': string;
      'md': string;
      'lg': string;
      'xl': string;
      '2xl': string;
    };
  }
}
