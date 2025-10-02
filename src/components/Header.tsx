'use client';

import styled from 'styled-components';
import ThemeButton from './ThemeButton';
import { flexRowBetween } from '@/styles/mixins';
import Link from 'next/link';

const Header = () => {
  return (
    <StyledHeader>
      <h1>
        <Link href="/">TickyNote</Link>
      </h1>
      <ThemeButton />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  ${flexRowBetween}
  color: ${({ theme }) => theme.colors.point};
  padding: 1rem 2rem;
`;
