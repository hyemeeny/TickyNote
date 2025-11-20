import { ChangeEventHandler, KeyboardEventHandler } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

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
