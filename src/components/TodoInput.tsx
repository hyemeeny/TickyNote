'use client';

import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
// import { useTodoStore } from '@/stores/useTodoStore';
import { Todo } from '@/types/todo';
import { createTodo } from '@/actions/todo';

const schema = z.object({
  title: z.string().min(1, { message: '할 일을 입력해주세요!' }),
  description: z.string().optional(),
});

const TodoInput = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  type FormData = z.infer<typeof schema>;

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      title: data.title,
      description: data.description ?? null,
      due_date: new Date().toISOString(),
      is_done: false,
      created_at: new Date().toISOString(),
    };

    console.log('새로운 할 일:', newTodo);
    createTodo(newTodo);
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
