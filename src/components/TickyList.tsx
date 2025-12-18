'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Ticky } from '@/types/ticky';
import { useTicky } from '@/hooks/useTicky';
import styled from 'styled-components';
import Search from '@/components/Search';
import TickyItem from '@/components/TickyItem';
import Pagination from '@/components/Pagination';

const LIMIT = 5;

const TickyList = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';
  const [search, setSearch] = useState(query);
  const [page, setPage] = useState(1);
  const { data, isLoading } = useTicky(query, page, LIMIT);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return null;
  console.log(data);

  const totalPage = Math.ceil(data / LIMIT);

  const sortedTickies = [...data].sort(
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
      <Pagination page={page} totalPage={totalPage} onChange={setPage} />
    </>
  );
};

export default TickyList;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
