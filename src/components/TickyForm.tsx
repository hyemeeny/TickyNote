'use client';

import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCreateTicky, useUpdateTicky } from '@/hooks/useTicky';
import TickyInput from '@/components/TickyInput';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

const schema = z.object({
  title: z.string().min(1, { message: '할 일을 입력해주세요!' }),
  description: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface TickyFormProps {
  mode: 'create' | 'edit';
  defaultValues?: FormData;
  id?: string;
}

const TickyForm = ({ mode, defaultValues, id }: TickyFormProps) => {
  const createTicky = useCreateTicky();
  const updateTicky = useUpdateTicky();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (mode === 'create') {
      createTicky.mutate(data, {
        onSuccess: () => router.push('/'),
      });
    } else if (mode === 'edit' && id) {
      updateTicky.mutate(
        { id, ...data },
        { onSuccess: () => router.push('/') }
      );
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <TickyInput
        label="제목"
        id="title"
        type="text"
        placeholder="할 일을 입력하세요"
        register={register('title')}
        errors={errors.title}
      />
      <TickyInput
        label="설명"
        id="description"
        type="text"
        placeholder="설명을 입력하세요"
        register={register('description')}
        errors={errors.description}
      />
      <button type="submit">{mode === 'create' ? '추가' : '수정'}</button>
    </StyledForm>
  );
};

export default TickyForm;

export const StyledForm = styled.form`
  width: 100%;
`;
