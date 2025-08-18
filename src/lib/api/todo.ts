/**
 * 클라이언트 컴포넌트에서 호출: 상대경로(/api/todos)
 * 서버 컴포넌트에서 호출: 절대경로(http://localhost:3000/api/todos)
 */

import { Todo } from '@/types/todo';

export const getTodos = async () => {
  const res = await fetch('/api/todos');

  if (!res.ok) throw new Error('투두 조회 실패');
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

export const updateTodo = async (
  // id는 필수 속성 타입이고 나머지만 부분 업데이트 가능
  // Omit: 특정 속성을 타입에서 제거
  data: { id: string } & Partial<Omit<Todo, 'id'>>
) => {
  const res = await fetch(`/api/todos/${data.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error('투두 수정 실패');
  return res.json();
};

export const deleteTodo = async (id: string) => {
  const res = await fetch(`/api/todos/${id}`, {
    method: 'DELETE',
  });

  if (!res.ok) throw new Error('투두 삭제 실패');
  return res.json();
};
