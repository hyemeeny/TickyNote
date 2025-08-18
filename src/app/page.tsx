import TodoInput from '@/components/TodoInput';
import TodoList from '@/components/TodoList';

export default async function Home() {
  return (
    <main>
      <TodoInput />
      <TodoList />
    </main>
  );
}
