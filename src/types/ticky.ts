import { z } from 'zod';
import {
  ChangeEventHandler,
  Dispatch,
  KeyboardEventHandler,
  ReactNode,
  SetStateAction,
} from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
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

export interface InputProps {
  id: string;
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  $register?: UseFormRegisterReturn;
  errors?: FieldError;
  textarea?: boolean;
  $round?: boolean;
  onChange?: ChangeEventHandler;
  onKeyDown?: KeyboardEventHandler;
}

export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  $variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
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
