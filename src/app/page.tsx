import { supabase } from '@/api/supabase';
import TodoInput from '@/components/TodoInput';
import TodoList from '@/components/TodoList';
// import { createClient } from '@/utils/supabase/server';

export const getTodos = async () => {
  // const supabase = await createClient(); // 비동기 함수
  // const { data, error } = await supabase.from('todos').select('*');
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
      <TodoList todos={todos} />
    </main>
  );
}
