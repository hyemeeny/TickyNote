import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDeleteTicky, useUpdateTicky } from '@/hooks/useTicky';
import { Ticky } from '@/types/ticky';
import Input from '@/components/TickyInput';

const TickyItem = ({ ticky }: { ticky: Ticky }) => {
  const { id, title, description, is_done } = ticky;
  const updateTicky = useUpdateTicky();
  const deleteTicky = useDeleteTicky();
  const [isEditing, setIsEditing] = useState(false);
  const [checked, setChecked] = useState(is_done);

  const { register, handleSubmit, reset } = useForm<Ticky>({
    defaultValues: { title, description: description ?? '' },
  });

  // 체크박스 이벤트
  const handleChecked = () => {
    const newChecked = !checked;
    setChecked(newChecked);

    updateTicky.mutate(
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
    deleteTicky.mutate(id);
    setIsEditing(false);
  };

  const onSubmit: SubmitHandler<Ticky> = (data) => {
    updateTicky.mutate(
      { ...data, id },
      { onSuccess: () => setIsEditing(false) }
    );
  };

  return (
    <li>
      <input
        id={`ticky-${id}`}
        type="checkbox"
        name="check"
        checked={checked}
        onChange={handleChecked}
      />

      {isEditing ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input id="title" type="text" register={register('title')} />
          <Input
            id="description"
            type="text"
            register={register('description')}
          />
          <button type="submit">저장</button>
          <button type="button" onClick={handleCancel}>
            취소
          </button>
        </form>
      ) : (
        <>
          <label htmlFor={`ticky-${id}`}>{title}</label>
          {description && <span>{description}</span>}
          <button onClick={handleEdit}>수정</button>
          <button onClick={handleDelete}>삭제</button>
        </>
      )}
    </li>
  );
};

export default TickyItem;
