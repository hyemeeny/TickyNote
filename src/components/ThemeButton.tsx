import { useThemeStore } from '@/stores/useThemeStore';
import { lightTheme } from '@/styles/theme';
import styled from 'styled-components';

const ThemeButton = () => {
  const { theme, toggleTheme } = useThemeStore();
  const isLight = theme === lightTheme;

  const craters = [
    { $size: 2, $top: 9, $left: 5 },
    { $size: 3, $top: 14, $left: 11 },
    { $size: 4, $top: 5, $left: 13 },
  ];

  const stars = [
    { $size: 1, $top: 10, $left: 27 },
    { $size: 1, $top: 10, $left: 11 },
    { $size: 2, $top: 15, $left: 18 },
    { $size: 1, $top: 18, $left: 7 },
    { $size: 1, $top: 23, $left: 25 },
  ];

  return (
    <ToggleButton onClick={toggleTheme}>
      {isLight ? (
        <Sun />
      ) : (
        <Moon>
          {craters.map((crater, i) => (
            <Crater key={i} {...crater} />
          ))}
        </Moon>
      )}

      {stars.map((star, i) =>
        isLight && (i === 1 || i === 3) ? null : (
          <Star key={i} {...star} $isLight={isLight} />
        )
      )}
    </ToggleButton>
  );
};

export default ThemeButton;

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.themeBg};
  width: 3.75rem;
  height: auto;
  padding: 0.3125rem 0;
  transition: background-color 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);

  & > div {
    display: inline-block;
    width: 1.375rem;
    height: 1.375rem;
    background-color: ${({ theme }) => theme.colors.themeIcon};
    border-radius: 50%;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transform: rotate(-45deg);
  }
`;

const Sun = styled.div`
  margin-right: auto;
  margin-left: 0.3125rem;
  transition: all 0.3s ease;
`;

const Moon = styled.div`
  margin-right: 0.3125rem;
  margin-left: auto;
  transform: translate3d(20px, 0, 0) rotate(0);
`;

const Crater = styled.span<{ $size: number; $top: number; $left: number }>`
  position: absolute;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  top: ${({ $top }) => $top}px;
  left: ${({ $left }) => $left}px;
  background-color: #e8cda5;
  border-radius: 100%;
  transition: opacity 0.2s ease-in-out;
`;

const Star = styled.span<{
  $size: number;
  $top: number;
  $left: number;
  $isLight?: boolean;
}>`
  position: absolute;
  width: ${({ $isLight, $size }) => ($isLight ? `15px` : `${$size}px`)};
  height: ${({ $isLight, $size }) => ($isLight ? `1px` : `${$size}px`)};
  top: ${({ $top }) => $top}px;
  left: ${({ $left }) => $left}px;
  background-color: #f8faff;
  border-radius: ${({ $isLight }) => ($isLight ? '2px' : '50%')};
  transition: all 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  aspect-ratio: 1 / 1;
`;
