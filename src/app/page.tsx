'use client';

import { useRef, useState } from 'react';
import { Todo } from '@/types/todo';
import TodoInput from '@/components/TodoInput';
import TodoList from '@/components/TodoList';

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const nextId = useRef(1); // 고유 ID 생성

  const addTodo = (text: string) => {
    setTodos([...todos, { id: nextId.current++, text }]);
  };

  return (
    <main>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} />
    </main>
  );
}
