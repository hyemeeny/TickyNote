import { useThemeStore } from '@/stores/useThemeStore';
import { lightTheme } from '@/styles/theme';
import { IoIosSunny, IoMdMoon } from 'react-icons/io';
import styled from 'styled-components';

const ThemeButton = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <ToggleButton onClick={toggleTheme}>
      {theme === lightTheme ? <IoMdMoon /> : <IoIosSunny />}
    </ToggleButton>
  );
};

export default ThemeButton;

const ToggleButton = styled.button`
  color: ${({ theme }) => theme.colors.point};
`;
