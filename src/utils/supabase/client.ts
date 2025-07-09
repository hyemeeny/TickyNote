import { createBrowserClient } from '@supabase/ssr';

// client component에서 supabase에 접근할 때 사용
// 싱글톤 패턴을 사용하여 createClient 함수 호출 횟수에 관계 없이 하나의 인스턴스만 생성
export const createClient = () => {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
};
