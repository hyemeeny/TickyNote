'use client';

import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCreateTicky } from '@/hooks/useTicky';
import TickyInput from '@/components/TickyInput';

const schema = z.object({
  title: z.string().min(1, { message: '할 일을 입력해주세요!' }),
  description: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const TickyForm = () => {
  const createTicky = useCreateTicky();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    createTicky.mutate(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>TickyNote</h1>
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
      <button type="submit">추가</button>
    </form>
  );
};

export default TickyForm;
