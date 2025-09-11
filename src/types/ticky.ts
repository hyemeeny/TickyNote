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
  label?: string;
  id: string;
  type: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  errors?: FieldError;
}
