import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Todo } from '@/types/todo';
import { useTodoStore } from '@/stores/useTodoStore';
import clsx from 'clsx';

const TodoItem = ({ todo }: { todo: Todo }) => {
  const { id, title, description } = todo;
  const { removeTodo } = useTodoStore();
  const [isBlinking, setIsBlinking] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;

    if (checked) {
      setIsBlinking(true);
      timeoutRef.current = setTimeout(() => {
        removeTodo(id);
      }, 3000);
    } else {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setIsBlinking(false);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <li className="flex gap-2">
      <input
        id={`todo-${id}`}
        type="checkbox"
        name="check"
        onChange={handleCheck}
        className={clsx('transition-all cursor-pointer', isBlinking ? 'animate-blink' : '')}
      />
      <label htmlFor={`todo-${id}`} className="text-sm cursor-pointer">
        {title}
      </label>
      <p>{description}</p>
    </li>
  );
};

export default TodoItem;
