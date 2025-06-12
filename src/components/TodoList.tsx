'use client';

import TodoItem from '@/components/TodoItem';
import { useTodoStore } from '@/stores/useTodoStore';

const TodoList = () => {
  const { todos } = useTodoStore();

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default TodoList;
