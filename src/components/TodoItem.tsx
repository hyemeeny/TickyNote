import { useState } from 'react';
import { Todo } from '@/types/todo';
import { updateTodo } from '@/lib/api/todo';

const TodoItem = ({ todo }: { todo: Todo }) => {
  const { id, title, description, is_done } = todo;
  const [checked, setChecked] = useState(is_done);

  const handleChecked = async () => {
    const newChecked = !checked;
    setChecked(newChecked);

    try {
      await updateTodo({ id: id, is_done: newChecked });
    } catch (error) {
      console.error('업데이트 실패', error);
      setChecked(!newChecked); // 실패시 롤백
    }
  };

  return (
    <li className="flex gap-2">
      <input
        id={`todo-${id}`}
        type="checkbox"
        name="check"
        className="cursor-pointer"
        onClick={handleChecked}
      />
      <label htmlFor={`todo-${id}`} className="text-sm cursor-pointer">
        {title}
      </label>
      <p>{description}</p>
      <button>수정</button>
      <button>삭제</button>
    </li>
  );
};

export default TodoItem;
