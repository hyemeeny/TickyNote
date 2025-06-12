import { create } from 'zustand';
import { Todo } from '@/types/todo';

type TodoState = {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
};

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  addTodo: (text) => {
    set((state) => ({ todos: [...state.todos, { id: Date.now(), text }] }));
  },
  removeTodo: (id) => {
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) }));
  },
}));
