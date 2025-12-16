'use client';

import { ReactNode } from 'react';
import styled from 'styled-components';
import media from '@/styles/media';
import { flexRowCenter } from '@/styles/mixins';

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <StyledMain>
      <StyledContainer>{children}</StyledContainer>
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
  /* max-width: 30vw; */
  max-width: 26.25rem;
  background-color: ${({ theme }) => theme.colors.background + '80'};
  -webkit-backdrop-filter: blur(0.625rem);
  backdrop-filter: blur(0.625rem);
  border-radius: 1.5rem;

  ${media.tablet`
    max-width: 80vw;
  `}

  ${media.mobile`
    max-width: 100vw;
    padding: 1.875rem .9375rem;
  `}
`;
