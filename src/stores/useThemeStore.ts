import { create } from 'zustand';
import { ThemeProps } from '@/types/ticky';
import { lightTheme, darkTheme } from '@/styles/theme';

export const useThemeStore = create<ThemeProps>((set, get) => ({
  mode: 'light',
  theme: lightTheme,

  setMode: (mode) => {
    set({ mode, theme: mode === 'light' ? lightTheme : darkTheme });
    document.cookie = `theme=${mode}; path=/; max-age=31536000`; // 모든 페이지, 1년동안 쿠키 저장
  },

  toggleTheme: () => {
    const next = get().mode === 'light' ? 'dark' : 'light';
    get().setMode(next);
  },
}));
