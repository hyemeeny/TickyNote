'use client';

import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCreateTodo } from '@/hooks/useTodos';

const schema = z.object({
  title: z.string().min(1, { message: '할 일을 입력해주세요!' }),
  description: z.string().nullable(),
});

type FormData = z.infer<typeof schema>;

const TodoInput = () => {
  const createTodo = useCreateTodo();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    createTodo.mutate(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="todo">TODOLIST</label>
      <div className="flex gap-1">
        <input
          className="border"
          type="text"
          id="title"
          placeholder="할 일을 입력하세요"
          {...register('title')}
        />
        <textarea
          className="border"
          id="description"
          {...register('description')}
        />
        <button type="submit">추가</button>
      </div>
      {errors.title && (
        <p className="text-red-500 text-sm">{errors.title.message}</p>
      )}
    </form>
  );
};

export default TodoInput;
