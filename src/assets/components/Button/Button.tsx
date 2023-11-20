import ButtonProps from '../../types/ButtonProps';

const Button = ({ onClick, children, type = 'button' }: ButtonProps) => {
  const handleClick = () => {
    onClick?.(type);
  };

  return (
    <button
      onClick={handleClick}
      className="rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 w-full">
      {children}
    </button>
  );
};

export default Button;