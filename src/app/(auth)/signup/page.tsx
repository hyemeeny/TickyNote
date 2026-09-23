'use client';

import { useActionState } from 'react';
import { signUpAction } from '@/actions/auth';
import { TickyInput } from '@/components/TickyInput';
import Button from '@/components/Button';

const SignUpPage = () => {
  const [state, formAction] = useActionState(signUpAction, null);

  return (
    <form action={formAction}>
      <TickyInput name="email" type="email" required />
      <TickyInput name="password" type="password" required />
      {state?.error && <p>{state.error}</p>}
      <Button type="submit">회원가입</Button>
    </form>
  );
};

export default SignUpPage;
