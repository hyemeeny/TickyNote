'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Ticky } from '@/types/ticky';
import { useTicky } from '@/hooks/useTicky';
import styled from 'styled-components';
import Search from '@/components/Search';
import TickyItem from '@/components/TickyItem';

const TickyList = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';
  const [search, setSearch] = useState(query);
  const { data: tickies, isLoading } = useTicky(query);

  if (isLoading) return <p>Loading...</p>;
  if (!tickies) return null;

  const sortedTickies = [...tickies].sort(
    (a, b) =>
      new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
  );

  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <StyledList>
        {sortedTickies.map((ticky: Ticky) => (
          <TickyItem key={ticky.id} ticky={ticky} />
        ))}
      </StyledList>
    </>
  );
};

export default TickyList;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
