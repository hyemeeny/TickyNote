import { create } from 'zustand';
import { Todo } from '@/types/todo';

type TodoState = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  removeTodo: (id: string) => void;
};

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  addTodo: (todo) => {
    set((state) => ({ todos: [...state.todos, todo] }));
  },
  removeTodo: (id) => {
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) }));
  },
}));
