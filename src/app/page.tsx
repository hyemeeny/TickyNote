import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import TodoInput from '@/components/TodoInput';
import TodoList from '@/components/TodoList';
import { supabase } from '@/lib/supabase/client';

const getTodos = async () => {
  const { data, error } = await supabase.from('todos').select('*');
  if (error) throw error;
  return data;
};

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  });

  return (
    // HydrationBoudary: Tanstack Query의 상태를 서버에서 클라이언트로 복원하는 데 사용되는 컴포넌트
    // dehydrate: Tanstack Query의 queryClient 상태를 JSON으로 직렬화해 클라이언트로 전달
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main>
        <TodoInput />
        <TodoList />
      </main>
    </HydrationBoundary>
  );
}
