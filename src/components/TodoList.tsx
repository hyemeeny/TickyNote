'use client';

import { Todo } from '@/types/todo';
import { useTodos } from '@/hooks/useTodos';
import TodoItem from '@/components/TodoItem';

const TodoList = () => {
  const { data: todos, isLoading } = useTodos();

  if (isLoading) return <p>Loading...</p>;
  if (!todos) return null;

  const sortedTodos = [...todos].sort(
    (a, b) =>
      new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
  );

  return (
    <ul>
      {sortedTodos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
