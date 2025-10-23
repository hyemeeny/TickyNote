import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      text: string;
      textSub: string;
      background: string;
      point: string;
      gray: string;
      red: string;
    };
  }
}
