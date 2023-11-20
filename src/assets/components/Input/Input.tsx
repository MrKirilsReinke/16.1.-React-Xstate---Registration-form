import InputProps from '../../types/InputProps';

const Input = ({
  autoComplete = 'off',
  formikError,
  formikTouched,
  onBlur,
  placeholder,
  type = 'text',
  onChange,
  name,
  label,
  required,
  value
}: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <label className="flex flex-col text-lg text-center font-medium leading-6 text-white">
      {label}
      <input
        required={required}
        autoComplete={autoComplete}
        onBlur={onBlur}
        name={name}
        type={type}
        className={`mt-2 max-w-[500px] flex-auto rounded-md bg-white/5 px-3.5 py-2 text-white shadow-sm sm:text-sm sm:leading-6 focus:outline-none ${
          formikError[name] && formikTouched[name] ? 'border-2 border-red-800' : 'border-0'
        }`}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </label>
  );
};

export default Input;