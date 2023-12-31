import ButtonProps from '../../types/ButtonProps';

const FormikButton = ({
  disabled,
  className = `${
    !disabled
      ? 'rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
      : 'rounded-md bg-grey-900 px-3 py-2 text-sm font-semibold text-black shadow-sm opacity-90 cursor-not-allowed'
  }`,
  onClick,
  children,
  type = 'button'
}: ButtonProps) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = e => {
    onClick?.(type, e);
  };

  return (
    <button className={className} disabled={disabled} onClick={handleClick} type={type}>
      {children}
    </button>
  );
};

export default FormikButton;
