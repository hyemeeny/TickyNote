'use client';

import Link from 'next/link';
import styled from 'styled-components';
import ThemeButton from '@/components/ThemeButton';

const Header = () => {
  return (
    <StyledHeader>
      <StyledTitleWrap>
        <h1>
          <Link href="/">TickyNote🌿</Link>
        </h1>
        <p>A simple note-taking app</p>
      </StyledTitleWrap>
      <ThemeButton />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  h1 {
    font-size: 2rem;
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    font-weight: 300;
  }
`;

const StyledTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;
