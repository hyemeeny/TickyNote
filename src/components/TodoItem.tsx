import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDeleteTodo, useUpdateTodo } from '@/hooks/useTodos';
import { Todo } from '@/types/todo';
import clsx from 'clsx';

const TodoItem = ({ todo }: { todo: Todo }) => {
  const { id, title, description, is_done } = todo;
  const updateTodo = useUpdateTodo();
  const deleteTodo = useDeleteTodo();
  const [isEditing, setIsEditing] = useState(false);
  const [checked, setChecked] = useState(is_done);

  const { register, handleSubmit, reset } = useForm<Todo>({
    defaultValues: { title, description: description ?? '' },
  });

  // 체크박스 이벤트
  const handleChecked = () => {
    const newChecked = !checked;
    setChecked(newChecked);

    updateTodo.mutate(
      { is_done: newChecked, id },
      { onError: () => setChecked(!newChecked) }
    );
  };

  // 수정 이벤트
  const handleEdit = () => {
    reset({ title, description: description ?? '' });
    setIsEditing(true);
  };

  // 취소 이벤트
  const handleCancel = () => {
    reset({ title, description: description ?? '' });
    setIsEditing(false);
  };

  // 삭제 이벤트
  const handleDelete = () => {
    deleteTodo.mutate(id);
    setIsEditing(false);
  };

  const onSubmit: SubmitHandler<Todo> = (data) => {
    updateTodo.mutate(
      { ...data, id },
      { onSuccess: () => setIsEditing(false) }
    );
  };

  return (
    <li className="flex gap-2">
      <input
        id={`todo-${id}`}
        type="checkbox"
        name="check"
        checked={checked}
        onChange={handleChecked}
      />

      {isEditing ? (
        <form onSubmit={handleSubmit(onSubmit)} className="flex gap-1">
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
          <button type="submit">저장</button>
          <button onClick={handleCancel}>취소</button>
        </form>
      ) : (
        <div>
          <label
            htmlFor={`todo-${id}`}
            className={clsx('text-sm', {
              'line-through': checked,
            })}
          >
            {title}
          </label>
          {description && <span>{description}</span>}
          <button onClick={handleEdit}>수정</button>
          <button onClick={handleDelete}>삭제</button>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
