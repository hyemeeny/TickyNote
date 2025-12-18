'use client';

import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  useCreateTicky,
  useUpdateTicky,
  useDeleteTicky,
} from '@/hooks/useTicky';
import { FormData, TickyFormProps } from '@/types/ticky';
import { schema } from '@/schemas/schema';
import { flexColStart, flexRowBetween, flexRowEnd } from '@/styles/mixins';
import TickyInput from '@/components/TickyInput';
import styled from 'styled-components';
import Button from '@/components/Button';
import { useEffect } from 'react';

const TickyForm = ({ mode, defaultValues, id }: TickyFormProps) => {
  const createTicky = useCreateTicky();
  const updateTicky = useUpdateTicky();
  const deleteTicky = useDeleteTicky();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isValid },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: 'onChange',
  });

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

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

  const handleDelete = (id: string) => {
    deleteTicky.mutate(id, { onSuccess: () => router.push('/') });
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInputWrap>
        <TickyInput
          id="title"
          type="text"
          placeholder="노트 제목을 입력해주세요."
          $register={register('title')}
          errors={errors.title}
        />
        <TickyInput
          id="description"
          textarea={true}
          placeholder="노트 내용을 입력해주세요."
          $register={register('description')}
          errors={errors.description}
        />
      </StyledInputWrap>
      <StyledButtonWrap $hasDelete={!!id}>
        {id && (
          <Button $variant="danger" onClick={() => handleDelete(id)}>
            삭제
          </Button>
        )}
        <div>
          <Button type="submit" disabled={!isValid || isSubmitting}>
            {mode === 'create' ? '추가' : '수정'}
          </Button>
          <Button $variant="secondary" onClick={() => router.push('/')}>
            취소
          </Button>
        </div>
      </StyledButtonWrap>
    </StyledForm>
  );
};

export default TickyForm;

const StyledForm = styled.form`
  width: 100%;
`;

const StyledInputWrap = styled.div`
  ${flexColStart}
  gap: 1rem;
`;

const StyledButtonWrap = styled.div<{ $hasDelete?: boolean }>`
  ${({ $hasDelete }) => ($hasDelete ? flexRowBetween : flexRowEnd)};
  margin-top: 1.5rem;

  & > div {
    display: flex;
    gap: 0.5rem;
  }
`;
