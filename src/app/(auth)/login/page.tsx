'use client';

import { useActionState } from 'react';
import { useSearchParams } from 'next/navigation';
import { loginAction, guestLoginAction } from '@/actions/auth';
import { TickyInput } from '@/components/TickyInput';
import Button from '@/components/Button';

const LoginPage = () => {
  const [state, formAction] = useActionState(loginAction, null);
  const searchParams = useSearchParams();
  const message = searchParams.get('message');

  return (
    <>
      <form action={formAction}>
        <TickyInput name="email" type="email" required />
        <TickyInput name="password" type="password" required />
        {state?.error && <p>{state.error}</p>}
        {message && <p>{message}</p>}
        <Button type="submit">로그인</Button>
      </form>

      <form action={guestLoginAction}>
        <Button type="submit" $variant="secondary">
          게스트로 둘러보기
        </Button>
      </form>
    </>
  );
};

export default LoginPage;
