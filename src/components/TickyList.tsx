'use client';

import { Ticky } from '@/types/ticky';
import { useTicky } from '@/hooks/useTicky';
import TickyItem from '@/components/TickyItem';

const TickyList = () => {
  const { data: tickies, isLoading } = useTicky();

  if (isLoading) return <p>Loading...</p>;
  if (!tickies) return null;

  const sortedTickies = [...tickies].sort(
    (a, b) =>
      new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
  );

  return (
    <ul>
      {sortedTickies.map((ticky: Ticky) => (
        <TickyItem key={ticky.id} ticky={ticky} />
      ))}
    </ul>
  );
};

export default TickyList;
