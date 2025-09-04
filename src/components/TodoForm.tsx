'use client';

import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCreateTodo } from '@/hooks/useTodos';
import TodoInput from './TodoInput';

const schema = z.object({
  title: z.string().min(1, { message: '할 일을 입력해주세요!' }),
  description: z.string().nullable(),
});

type FormData = z.infer<typeof schema>;

const TodoForm = () => {
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
      <h1>TODOLIST</h1>
      <TodoInput
        label="제목"
        name="title"
        type="text"
        placeholder="할 일을 입력하세요"
        register={register('title')}
        errors={errors.title}
      />
      <TodoInput
        label="설명"
        name="description"
        type="text"
        placeholder="설명을 입력하세요"
        register={register('description')}
        errors={errors.description}
      />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoForm;
