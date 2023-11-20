type InputProps = {
  placeholder: string;
  value: string;
  label: string;
  id?: string;
  name: string;
  type?: 'text' | 'number';
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  formikTouched: { [key: string]: boolean };
  formikError: { [key: string]: string };
  autoComplete?: 'off' | 'on';
  required: boolean;
};

export default InputProps;