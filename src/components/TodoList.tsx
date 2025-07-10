'use client';

import TodoItem from '@/components/TodoItem';
// import { useTodoStore } from '@/stores/useTodoStore';
import { Todo } from '@/types/todo';

const TodoList = ({ todos }: { todos: Todo[] }) => {
  // const { todos } = useTodoStore();

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default TodoList;
