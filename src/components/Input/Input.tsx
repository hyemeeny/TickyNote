import { InputProps } from '@/types/ticky';
import { StyledInput } from './Input.styles';

const Input = ({
  label,
  id,
  type,
  placeholder,
  register,
  errors,
}: InputProps) => {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <StyledInput
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
      />
      {errors && <p>{errors.message}</p>}
    </>
  );
};

export default Input;
