import { useState } from 'react';
import { Todo } from '@/types/todo';
import clsx from 'clsx';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDeleteTodo, useUpdateTodo } from '@/hooks/useTodos';

const TodoItem = ({ todo }: { todo: Todo }) => {
  const { id, title, description, is_done } = todo;
  const updateTodo = useUpdateTodo();
  const deleteTodo = useDeleteTodo();
  const [isEditing, setIsEditing] = useState(false);
  const [checked, setChecked] = useState(is_done);

  const { register, handleSubmit, reset } = useForm<Todo>({
    defaultValues: { title, description: description ?? '' },
  });

  // 체크박스 즉시 반영 + 실패 시 롤백
  const handleChecked = () => {
    const newChecked = !checked;
    setChecked(newChecked);

    updateTodo.mutate(
      { is_done: newChecked, id },
      { onError: () => setChecked(!newChecked) }
    );
  };

  // 수정 버튼 → 폼 열기 + 현재 값 초기화
  const handleEdit = () => {
    reset({ title, description: description ?? '' });
    setIsEditing(true);
  };

  // 취소 → 폼 닫기 + 초기값 복원
  const handleCancel = () => {
    reset({ title, description: description ?? '' });
    setIsEditing(false);
  };

  // 삭제 → 폼 닫기
  const handleDelete = () => {
    deleteTodo.mutate(id);
    setIsEditing(false);
  };

  // 저장 → 서버 반영 + 캐시 갱신 + 폼 닫기
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
