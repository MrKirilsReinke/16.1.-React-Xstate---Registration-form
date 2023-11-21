import InputProps from '../../types/InputProps';

const FormInput = ({
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
    <label className="block text-sm font-medium leading-6 text-gray-900">
      {label}
      <input
        required={required}
        autoComplete={autoComplete}
        onBlur={onBlur}
        name={name}
        type={type}
        className={`mt-2 block w-full rounded-md p-1.5 text-gray-900 placeholder:text-gray-400 shadow-sm ${
          formikError[name] && formikTouched[name]
            ? 'border-2 border-red-800'
            : 'ring-1 ring-inset ring-gray-300 border-0'
        } sm:text-sm sm:leading-6`}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </label>
  );
};

export default FormInput;