import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

interface TodoInputProps {
  onAdd: (todo: string) => void;
}

type FormValues = {
  todo: string;
};

const schema = z.object({
  todo: z.string().min(1, { message: '할 일을 입력해주세요!' }),
});

const TodoInput = ({ onAdd }: TodoInputProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    if (data.todo.trim()) {
      onAdd(data.todo);
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="todo">TODO</label>
      <div className="flex gap-1">
        <input className="border" type="text" id="todo" placeholder="할 일을 입력하세요" {...register('todo')} />
        <button className="cursor-pointer">추가</button>
      </div>
      {errors.todo && <p className="text-red-500 text-sm">{errors.todo.message}</p>}
    </form>
  );
};

export default TodoInput;
