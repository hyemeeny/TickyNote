import { InputProps } from '@/types/ticky';
import styled, { css } from 'styled-components';

const TickyInput = ({ textarea, errors, ...props }: InputProps) => {
  return (
    <>
      {textarea ? <StyledTextarea {...props} /> : <StyledInput {...props} />}
      {errors && <ErrorMessage>{errors.message}</ErrorMessage>}
    </>
  );
};

export default TickyInput;

const CommonStyles = css<{ $round?: boolean }>`
  width: 100%;
  border-radius: ${({ $round }) => ($round ? '6.25rem' : '0.5rem')};
  border: none;
  outline: none;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background + '80'};
  transition: all 0.2s;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSub};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.point};
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

const StyledInput = styled.input<{ $round?: boolean }>`
  ${CommonStyles}
  height: 3.125rem;
  font-size: 1rem;

  &::placeholder {
    font-size: 1rem;
  }
`;

const StyledTextarea = styled.textarea<{ $round?: boolean }>`
  ${CommonStyles}
  height: 12.5rem;
  font-size: 0.875rem;
  resize: none;

  &::placeholder {
    font-size: 0.875rem;
  }
`;

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.red};
  font-size: 0.75rem;
  margin-top: -0.5rem;
  padding-left: 0.5rem;
`;
