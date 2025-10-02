import { create } from 'zustand';
import { darkTheme, lightTheme } from '@/styles/theme';

type ThemeState = {
  theme: typeof lightTheme;
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
  theme: lightTheme,
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === lightTheme ? darkTheme : lightTheme,
    })),
}));
