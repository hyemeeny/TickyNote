import { createClient } from '@supabase/supabase-js'
import { Database } from '@/types/supabase'

/**
 * Supabase 클라이언트 인스턴스 생성
 *
 * createBrowserClient
 * - Client Component에서 사용
 * - 브라우저 환경에 맞게 세션(localStorage) 자동 관리
 *
 * createServerClient
 * - Server Component / Route Handler에서 사용
 * - cookies()와 연동하여 SSR 환경에서 로그인 세션 유지 가능
 *
 * createClient
 * - @supabase/supabase-js의 기본 클라이언트
 * - 클라이언트/서버 모두 사용 가능
 * - 세션 자동 처리 없음 (단순 CRUD에 적합)
 */

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient<Database>(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);


