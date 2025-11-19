import { InputProps } from '@/types/ticky';
import styled from 'styled-components';

const TickyInput = ({
  id,
  type = 'text',
  placeholder,
  register,
  errors,
  textarea = false,
}: InputProps) => {
  return (
    <>
      {textarea ? (
        <StyledTextarea id={id} placeholder={placeholder} {...register} />
      ) : (
        <StyledInput
          id={id}
          type={type}
          placeholder={placeholder}
          {...register}
        />
      )}
      {errors && <ErrorMessage>{errors.message}</ErrorMessage>}
    </>
  );
};

export default TickyInput;

const StyledInput = styled.input`
  width: 100%;
  height: 3.125rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  border: none;
  padding: 0 1rem;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background + '80'};

  &::placeholder {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textSub};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.point};
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 12.5rem;
  border-radius: 0.5rem;
  border: none;
  padding: 1rem;
  resize: none;
  font-family: 'Pretendard', sans-serif;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background + '80'};

  &::placeholder {
    font-size: 0.875rem;
    font-family: 'Pretendard', sans-serif;
    color: ${({ theme }) => theme.colors.textSub};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.point};
  }
`;

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.red};
  font-size: 0.75rem;
  margin-top: -0.5rem;
  padding-left: 0.5rem;
`;
