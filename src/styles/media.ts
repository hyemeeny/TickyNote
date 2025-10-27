import { css, type CSSObject, type Interpolation } from 'styled-components';

export type Breakpoints = 'mobile' | 'tablet' | 'pc';

export const breakpoints: Record<Breakpoints, string> = {
  mobile: '@media (max-width: 639px)',
  tablet: '@media (max-width: 1047px)',
  pc: '@media (min-width: 1048px)',
};

const media = Object.entries(breakpoints).reduce(
  (acc, [key, value]) => {
    return {
      ...acc,
      [key]: (
        first: CSSObject | TemplateStringsArray,
        ...interpolations: Interpolation<object>[]
      ): ReturnType<typeof css> => css`
        ${value} {
          ${css(first, ...interpolations)}
        }
      `,
    };
  },
  {} as Record<
    Breakpoints,
    (
      first: CSSObject | TemplateStringsArray,
      ...interpolations: Interpolation<object>[]
    ) => ReturnType<typeof css>
  >
);

export default media;
