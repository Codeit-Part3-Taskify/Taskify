import { ReactNode } from 'react';
import { ButtonType } from '@/types/common';

interface Props {
  className?: string;
  type?: ButtonType;
  prefix?: ReactNode;
  children?: ReactNode;
  appendix?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  className,
  type = 'submit',
  prefix,
  children,
  appendix,
  onClick,
  disabled = false
}: Props) {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {prefix}
      {children}
      {appendix}
    </button>
  );
}
