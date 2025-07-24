import { Todo } from '@/types/todo';
import { useQuery } from '@tanstack/react-query';
import { fetchTodos } from '@/lib/api/todo';

export const useTodos = ({ initialData }: { initialData: Todo[] }) => {
  const { data: todos = [] } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
    initialData,
  });
  return { todos };
};
