import { TickyInputProps } from '@/types/ticky';

const TickyInput = ({
  label,
  id,
  type,
  placeholder,
  register,
  errors,
}: TickyInputProps) => {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id} type={type} placeholder={placeholder} {...register} />
      {errors && <p className="text-red-500 text-sm">{errors.message}</p>}
    </>
  );
};

export default TickyInput;
