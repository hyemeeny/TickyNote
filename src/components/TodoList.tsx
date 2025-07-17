'use client';

import { useQuery } from '@tanstack/react-query';
import { Todo } from '@/types/todo';
import TodoItem from '@/components/TodoItem';
import { fetchTodos } from '@/lib/api/todo';

const TodoList = ({ initialTodos }: { initialTodos: Todo[] }) => {
  const { data: todos = [] } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
    initialData: initialTodos,
  });

  return (
    <ul>
      {todos.map((todo: Todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default TodoList;
