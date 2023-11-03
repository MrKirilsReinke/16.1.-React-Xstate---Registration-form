import { ReactNode } from 'react';

type FormikButtonProps = {
  onClick?: ( type: string, e: React.MouseEvent<HTMLButtonElement> ) => void 
  children: ReactNode
  type?: 'button' | 'submit'
}

const FormikButton = ({ onClick, children, type = 'button' }: FormikButtonProps) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    onClick?.(type, e);
  };

  return (
    <button
      onClick={handleClick}
      type={type}
      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
      {children}
    </button>
  );
};

export default FormikButton;