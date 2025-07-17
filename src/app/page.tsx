import TodoInput from '@/components/TodoInput';
import TodoList from '@/components/TodoList';
import { supabase } from '@/lib/supabase/client';

export const getTodos = async () => {
  const { data: todos, error } = await supabase.from('todos').select('*');
  if (error) throw error;

  return todos;
};

export default async function Home() {
  const todos = await getTodos();
  console.log('todos', todos);

  return (
    <main>
      <TodoInput />
      <TodoList initialTodos={todos || []} />
    </main>
  );
}
