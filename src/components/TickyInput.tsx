import { InputProps } from '@/types/ticky';
import styled from 'styled-components';

const TickyInput = ({
  label,
  id,
  type,
  placeholder,
  register,
  errors,
}: InputProps) => {
  return (
    <StyledLabelInputWrap>
      {label && <label htmlFor={id}>{label}</label>}
      <StyledInput
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
      />
      {errors && <p>{errors.message}</p>}
    </StyledLabelInputWrap>
  );
};

export default TickyInput;

export const StyledLabelInputWrap = styled.label`
  display: flex;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 2.5rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.point};

  &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.colors.point};
  }
`;
