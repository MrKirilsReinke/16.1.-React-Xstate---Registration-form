type FormikInputProps = { 
  // field: FieldInputProps<string>
  // required: boolean
  placeholder: string
  value: string 
  label: string
  id?: string
  name?: string
  type?: 'text' | 'number'
  onChange: ( e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e) => void
}

const FormikInput = ({ onBlur, placeholder, type = 'text', onChange, name, label, /* id, */ /* field */ /* required = true */ value }: FormikInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const value = e.target.value;
    onChange(e);
  };
  
  return (
    <label className="block text-sm font-medium leading-6 text-gray-900">
      {label}
      <input
        onBlur={onBlur}
        name={name}
        // id={id}
        type={type}
        className="mt-2 block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        value={value}
        // {...field}
        placeholder={placeholder}
        onChange={handleChange}

      />
    </label>

  );
};

export default FormikInput;