'use client';

import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createTodo } from '@/lib/api/todo';
import { useQueryClient, useMutation } from '@tanstack/react-query';

const schema = z.object({
  title: z.string().min(1, { message: '할 일을 입력해주세요!' }),
  description: z.string().nullable(),
});

type FormData = z.infer<typeof schema>;

const TodoInput = () => {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const createTodoMutation = useMutation({
    mutationFn: async (data: FormData) => {
      await createTodo(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log('새로운 할 일:', data);
    createTodoMutation.mutate(data);
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
        <button type="submit" className="cursor-pointer">
          추가
        </button>
      </div>
      {errors.title && (
        <p className="text-red-500 text-sm">{errors.title.message}</p>
      )}
    </form>
  );
};

export default TodoInput;
