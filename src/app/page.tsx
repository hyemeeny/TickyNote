import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { supabase } from '@/lib/supabase/client';
import Form from '@/components/Form/Form';
import List from '@/components/List/List';

const getTickies = async () => {
  const { data, error } = await supabase.from('tickies').select('*');
  if (error) throw error;
  return data;
};

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['ticky'],
    queryFn: getTickies,
  });

  return (
    // HydrationBoundary: Tanstack Query의 상태를 서버에서 클라이언트로 복원
    // dehydrate: queryClient 상태를 JSON으로 직렬화하여 클라이언트로 전달
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main>
        <Form />
        <List />
      </main>
    </HydrationBoundary>
  );
}
