import { z } from 'zod';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import { schema } from '@/schemas/schema';
import { lightTheme } from '@/styles/theme';

export type FormData = z.infer<typeof schema>;
export type FormMode = 'create' | 'edit';
export type ThemeMode = 'light' | 'dark';

export interface Ticky {
  id: string; // 고유 ID
  title: string; // 할 일 제목
  description?: string; // 할 일 내용
  due_date: string | null; // 마감 날짜
  is_done: boolean; // 완료 여부
  created_at: string; // 생성 날짜
}

export interface SearchProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

export interface TickyFormProps {
  id?: string;
  mode: FormMode;
  defaultValues?: FormData;
}

export interface ThemeProviderWrapperProps {
  children: ReactNode;
  initialMode: ThemeMode;
}

export interface ThemeProps {
  mode: ThemeMode;
  theme: typeof lightTheme;
  setMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
}

export interface PaginationProps {
  page: number;
  totalPage: number;
  onChange: (page: number) => void;
}
