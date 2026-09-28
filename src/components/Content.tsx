'use client';

import Link from 'next/link';
import styled from 'styled-components';
import TickyList from '@/components/TickyList';
import { darken } from 'polished';

const Content = () => {
  return (
    <StyledContent>
      <TickyList />
      <StyledLinkButton href="/ticky/new">새 노트</StyledLinkButton>
    </StyledContent>
  );
};

export default Content;

const StyledContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const StyledLinkButton = styled(Link)`
  margin-left: auto;
  padding: 0.5rem 1.25rem;
  border-radius: 0.5rem;
  color: #fff;
  font-size: 0.875rem;
  background-color: ${({ theme }) => theme.colors.point};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => darken(0.04, theme.colors.point)};
  }
`;
