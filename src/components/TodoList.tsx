'use client';

import { Todo } from '@/types/todo';
import { useTodos } from '@/hooks/useTodos';
import TodoItem from '@/components/TodoItem';

const TodoList = ({ initialData }: { initialData: Todo[] }) => {
  const { todos } = useTodos({ initialData });

  return (
    <ul>
      {todos.map((todo: Todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default TodoList;
