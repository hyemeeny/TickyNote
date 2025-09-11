import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.point};

  &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.colors.point};
  }
`;
