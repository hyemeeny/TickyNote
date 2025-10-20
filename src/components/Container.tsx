'use client';

import styled from 'styled-components';

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledMain>
      <StyledContent>{children}</StyledContent>
    </StyledMain>
  );
};

export default Container;

export const StyledMain = styled.main`
  padding: 0 1.25rem;
  margin: 0 auto;
`;

export const StyledContent = styled.section`
  width: calc(100% - 3rem);
  max-width: 30rem;
  height: calc(75%);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 24px;
`;
