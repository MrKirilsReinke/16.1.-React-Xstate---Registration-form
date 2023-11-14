type InputProps = { 
  required?: boolean
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
}

const Input = ({ autoComplete = 'off', formik, onBlur, placeholder, type = 'text', onChange, name, label, /* id, */ /* field */ required, value }: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const value = e.target.value;
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
        className={`mt-2 max-w-[500px] flex-auto rounded-md bg-white/5 px-3.5 py-2 text-white shadow-sm sm:text-sm sm:leading-6 focus:outline-none ${formik.touched[name] && formik.errors[name] ? 'border-2 border-red-800' : 'border-0'}`}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </label>
  );
};

export default Input;


// type InputProps = { 
//   // field: FieldInputProps<string>
//   // required: boolean
//   placeholder: string
//   value: string 
//   // label: string
//   id?: string
//   name?: string
//   type?: 'text' | 'number'
//   onChange: ( type: string, e: React.ChangeEvent<HTMLInputElement>) => void
// }

// const Input = ({ placeholder, type = 'text', onChange, /* name, */ id, /* field */ /* required = true */ value }: InputProps) => {
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     // const value = e.target.value;
//     onChange(type, e);
//   };
  
//   return (
//     <input
//       // name={name}
//       id={id}
//       type={type}
//       className="min-w-[500px] flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
//       value={value}
//       // {...field}
//       placeholder={placeholder}
//       onChange={handleChange}

//     />
//   );
// };

// export default Input;