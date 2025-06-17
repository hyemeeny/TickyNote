import { supabase } from '@/api/supabase';
import TodoInput from '@/components/TodoInput';
import TodoList from '@/components/TodoList';

export const getTodos = async () => {
  const { data, error } = await supabase.from('todos').select('*');
  if (error) throw error;

  return data;
};

export default async function Home() {
  const todos = await getTodos();
  console.log('todos', todos);

  return (
    <main>
      <TodoInput />
      <TodoList />
    </main>
  );
}
