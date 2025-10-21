'use client';

import Link from 'next/link';
import styled from 'styled-components';
import media from '@/styles/media';
import { flexRowCenter } from '@/styles/mixins';
import ThemeButton from '@/components/ThemeButton';

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledMain>
      <StyledContainer>
        <StyledHeader>
          <StyledTitleWrap>
            <h1>
              <Link href="/">TickyNote</Link>
            </h1>
            <p>A simple note-taking app</p>
          </StyledTitleWrap>
          <ThemeButton />
        </StyledHeader>
        <StyledContent>{children}</StyledContent>
      </StyledContainer>
    </StyledMain>
  );
};

export default Container;

const StyledMain = styled.main`
  padding: 0 1rem;
  height: calc(100vh - 3.125rem);
  ${flexRowCenter}
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  box-sizing: border-box;
  padding: 1.875rem;
  margin: 0 auto;
  width: 100%;
  max-width: 30vw;
  background-color: rgba(255, 255, 255, 0.5);
  -webkit-backdrop-filter: blur(0.625rem);
  backdrop-filter: blur(0.625rem);
  border-radius: 1.5rem;

  ${media.medium`
    max-width: 80vw;
  `}

  ${media.small`
    max-width: 100vw;
  `}
`;

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

const StyledContent = styled.section``;
