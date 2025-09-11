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
    };
    font: {
      size: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
    };
  }
}
