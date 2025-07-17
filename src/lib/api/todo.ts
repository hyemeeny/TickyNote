/**
 * 클라이언트 컴포넌트에서 호출: 상대경로(/api/todos)
 * 서버 컴포넌트에서 호출: 절대경로(http://localhost:3000/api/todos)
 */

import { Todo } from '@/types/todo';

export const fetchTodos = async () => {
  const res = await fetch('/api/todos');

  if (!res.ok) {
    const errorBody = await res.json().catch(() => ({}));
    throw new Error(errorBody.message || '서버 요청 실패');
  }
  return res.json();
};

export const createTodo = async (formData: {
  title: string;
  description: string | null;
}) => {
  const res = await fetch('/api/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  if (!res.ok) throw new Error('투두 생성 실패');
  return res.json();
};

export const updateTodo = async (data: Partial<Todo>) => {
  const res = await fetch(`/api/todos/${data.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data }),
  });

  console.log('data 디버깅', data);

  if (!res.ok) throw new Error('업데이트 실패');
  return res.json();
};
