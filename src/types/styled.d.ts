import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      text: string;
      background: string;
      main: string;
      sub: string;
      point: string;
      gray: string;
      red: string;
    };
  }
}
