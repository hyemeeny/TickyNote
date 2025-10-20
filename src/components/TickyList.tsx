'use client';

import { Ticky } from '@/types/ticky';
import { useTicky } from '@/hooks/useTicky';
import TickyItem from '@/components/TickyItem';
import styled from 'styled-components';

const TickyList = () => {
  const { data: tickies, isLoading } = useTicky();

  if (isLoading) return <p>Loading...</p>;
  if (!tickies) return null;

  const sortedTickies = [...tickies].sort(
    (a, b) =>
      new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
  );

  return (
    <StyledList>
      {sortedTickies.map((ticky: Ticky) => (
        <TickyItem key={ticky.id} ticky={ticky} />
      ))}
    </StyledList>
  );
};

export default TickyList;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
