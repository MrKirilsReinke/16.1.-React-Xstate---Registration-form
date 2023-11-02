type FormikInputProps = { 
  // field: FieldInputProps<string>
  // required: boolean
  placeholder: string
  value: string 
  // label: string
  id?: string
  name?: string
  type?: 'text' | 'number'
  onChange: ( e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e) => void
}

const FormikInput = ({ onBlur, placeholder, type = 'text', onChange, name, /* id, */ /* field */ /* required = true */ value }: FormikInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const value = e.target.value;
    onChange(e);
  };
  
  return (
    <input
      onBlur={onBlur}
      name={name}
      // id={id}
      type={type}
      className="min-w-[500px] flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
      value={value}
      // {...field}
      placeholder={placeholder}
      onChange={handleChange}

    />
  );
};

export default FormikInput;