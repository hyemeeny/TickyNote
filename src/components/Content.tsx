'use client';

import Link from 'next/link';
import styled from 'styled-components';
import TickyList from '@/components/TickyList';
import Button from '@/components/Button';

const Content = () => {
  return (
    <StyledContent>
      <TickyList />
      <StyledNewButton href="/ticky/new">
        <Button>새 노트</Button>
      </StyledNewButton>
    </StyledContent>
  );
};

export default Content;

const StyledContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const StyledNewButton = styled(Link)`
  margin-left: auto;
`;
