'use client';

import { Todo } from '@/types/todo';
import { useTodos } from '@/hooks/useTodos';
import TodoItem from '@/components/TodoItem';

const TodoList = () => {
  const { data: todos, isLoading } = useTodos();

  if (isLoading) return <p>Loading...</p>;

  return (
    <ul>
      {todos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
