import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface TodoInputProps {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  errors?: FieldError;
}

const TodoInput = ({
  label,
  name,
  type,
  placeholder,
  register,
  errors,
}: TodoInputProps) => {
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <input type={type} id={name} placeholder={placeholder} {...register} />
      {errors && <p className="text-red-500 text-sm">{errors.message}</p>}
    </>
  );
};

export default TodoInput;
