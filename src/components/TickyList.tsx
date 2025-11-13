'use client';

import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { Ticky } from '@/types/ticky';
import { useTicky } from '@/hooks/useTicky';
import TickyItem from '@/components/TickyItem';
import styled from 'styled-components';

const TickyList = () => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState('');
  const { data: tickies, isLoading } = useTicky(query);

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onSearch = () => {
    setQuery(inputValue.trim());
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (!tickies) return null;

  const sortedTickies = [...tickies].sort(
    (a, b) =>
      new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
  );

  return (
    <StyledList>
      <input
        type="text"
        id="search"
        name="search"
        value={inputValue}
        onChange={onChangeSearch}
        onKeyDown={onKeyDown}
        placeholder="검색어를 입력하세요!"
      />
      <button onClick={onSearch}>+</button>
      {sortedTickies.map((ticky: Ticky) => (
        <TickyItem key={ticky.id} ticky={ticky} />
      ))}
    </StyledList>
  );
};

export default TickyList;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
