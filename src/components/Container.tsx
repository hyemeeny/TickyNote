'use client';

import { flexColStart } from '@/styles/mixins';
import styled from 'styled-components';

const Container = ({ children }: { children: React.ReactNode }) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Container;

export const StyledMain = styled.main`
  max-width: max-content;
  margin: auto;
  gap: 1rem;
  ${flexColStart};
`;
