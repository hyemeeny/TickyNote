import {
  ChangeEventHandler,
  Dispatch,
  KeyboardEventHandler,
  ReactNode,
  SetStateAction,
} from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { z } from 'zod';

export const schema = z.object({
  title: z.string().min(1, { message: '할 일을 입력해주세요!' }),
  description: z.string().optional(),
});

export type FormData = z.infer<typeof schema>;

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
  register?: UseFormRegisterReturn;
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
  mode: 'create' | 'edit';
  defaultValues?: FormData;
  id?: string;
}
