'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTodoStore } from '@/stores/useTodoStore';

const schema = z.object({
  todo: z.string().min(1, { message: '할 일을 입력해주세요!' }),
});

const TodoInput = () => {
  const { addTodo } = useTodoStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: { todo: string }) => {
    if (data.todo.trim()) {
      addTodo(data.todo);
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="todo">TODOLIST</label>
      <div className="flex gap-1">
        <input className="border" type="text" id="todo" placeholder="할 일을 입력하세요" {...register('todo')} />
        <button type="submit" className="cursor-pointer">
          추가
        </button>
      </div>
      {errors.todo && <p className="text-red-500 text-sm">{errors.todo.message}</p>}
    </form>
  );
};

export default TodoInput;
