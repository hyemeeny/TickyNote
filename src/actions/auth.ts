'use server';

import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

type LoginState = { error: string } | null;

export const loginAction = async (
  _prevState: LoginState,
  formData: FormData
): Promise<LoginState> => {
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  });

  if (error) return { error: error.message };

  redirect('/');
};

export const signUpAction = async (
  _prevState: LoginState,
  formData: FormData
): Promise<LoginState> => {
  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  });

  if (error) return { error: error.message };

  redirect(`/login?message=${encodeURIComponent('확인 이메일을 보냈습니다')}`);
};

export const guestLoginAction = async (_formData: FormData) => {
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email: 'guest@ticky.dev',
    password: process.env.GUEST_PASSWORD!,
  });

  if (error) {
    console.error('게스트 로그인 실패:', error.message);
    return;
  }

  redirect('/');
};
