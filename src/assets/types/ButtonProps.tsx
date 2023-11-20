import { ReactNode } from 'react';

type ButtonProps = {
  onClick?: ( type: string, e?: React.MouseEvent<HTMLButtonElement>) => void 
  children: ReactNode
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
}

export default ButtonProps;