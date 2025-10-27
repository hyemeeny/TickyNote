import { useThemeStore } from '@/stores/useThemeStore';
import { lightTheme } from '@/styles/theme';
import styled from 'styled-components';

const ThemeButton = () => {
  const { theme, toggleTheme } = useThemeStore();
  const isLight = theme === lightTheme;

  const craters = [
    { size: 2, top: 9, left: 5 },
    { size: 3, top: 14, left: 11 },
    { size: 4, top: 5, left: 13 },
  ];

  const stars = [
    { top: 4, left: 18, size: 1 },
    { top: 10, left: 14, size: 2 },
    { top: 18, left: 19, size: 1 },
    { top: 8, left: 6, size: 1 },
    { top: 16, left: 10, size: 1 },
  ];

  return (
    <ToggleButton onClick={toggleTheme}>
      {isLight ? (
        <Sun />
      ) : (
        <>
          <Moon>
            {craters.map((crater, i) => (
              <Crater key={i} {...crater} />
            ))}
          </Moon>

          {stars.map((star, i) => (
            <Star key={i} {...star} />
          ))}
        </>
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
  width: 45px;
  height: 25px;
  padding: 0;
  transition: background-color 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);

  & > div {
    display: inline-block;
    width: 22px;
    height: 22px;
    background-color: ${({ theme }) => theme.colors.themeIcon};
    border-radius: 50%;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transform: rotate(-45deg);
  }
`;

const Sun = styled.div`
  margin-right: auto;
  transition: all 0.3s ease;
`;

const Moon = styled.div`
  transform: translate3d(20px, 0, 0) rotate(0);
  margin-left: auto;
`;

const Crater = styled.span<{ size: number; top: number; left: number }>`
  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  background-color: #e8cda5;
  border-radius: 100%;
  transition: opacity 0.2s ease-in-out;
`;

const Star = styled.span<{ top: number; left: number; size: number }>`
  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  background-color: #f8faff;
  border-radius: 50%;
  transition: all 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
`;
