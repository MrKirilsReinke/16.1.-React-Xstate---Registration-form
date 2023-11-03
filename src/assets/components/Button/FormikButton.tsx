import { ReactNode } from 'react';

type FormikButtonProps = {
  onClick: ( type: string, e: React.MouseEvent<HTMLButtonElement> ) => void 
  children: ReactNode
  type?: 'button' | 'submit'
}

const FormikButton = ({ onClick, children, type = 'button' }: FormikButtonProps) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    onClick(type, e);
  };

  return (
    <button
      onClick={handleClick}
      type={type}
      className="rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 w-full">
      {children}
    </button>
  );
};

export default FormikButton;