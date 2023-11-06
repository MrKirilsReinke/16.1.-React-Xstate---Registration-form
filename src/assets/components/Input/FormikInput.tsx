type FormikInputProps = { 
  placeholder: string
  value: string 
  label: string
  id?: string
  name?: string
  type?: 'text' | 'number'
  onChange: ( e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e) => void
  formik: any
  autoComplete?: 'off' | 'on'
  required: boolean
}

const FormikInput = ({ required, autoComplete = 'off', formik, onBlur, placeholder, type = 'text', onChange, name, label, /* id, */ /* field */ /* required = true */ value }: FormikInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const value = e.target.value;
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
        className={`mt-2 block w-full rounded-md p-1.5 text-gray-900 placeholder:text-gray-400 shadow-sm ${formik.errors[name] ? 'border-2 border-red-800' : 'ring-1 ring-inset ring-gray-300 border-0'} sm:text-sm sm:leading-6`}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </label>
  );
};

export default FormikInput;