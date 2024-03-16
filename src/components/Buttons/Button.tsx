import { ReactNode } from 'react';
import { ButtonType, ButtonVariant } from 'src/types/buttonTypes';

interface ButtonProps {
  variant: ButtonVariant; // 버튼 종류
  customStyles?: string; // 추가 스타일(padding, border-radius, width, height ...)
  type?: ButtonType;
  disabled?: boolean;
  onClick?: () => void;
  onBlur?: () => void;
  // 버튼 내용물
  prefix?: ReactNode;
  children?: ReactNode;
  appendix?: ReactNode;
}

export default function Button({
  variant,
  customStyles,
  type = 'submit',
  disabled = false,
  onClick,
  onBlur,
  prefix,
  children,
  appendix
}: ButtonProps) {
  const basicStyles = `flex justify-center items-center`;
  // variant에 따라 적용할 스타일을 결정
  const variantStyles = {
    primary: `${basicStyles} bg-violet text-white`,
    secondary: `${basicStyles} bg-white text-violet border border-gray_D9D9D9`,
    ghost: `${basicStyles} bg-invisible border border-gray_D9D9D9`
  };

  return (
    <button
      type={type}
      className={`${variantStyles[variant]} ${customStyles}`}
      disabled={disabled}
      onClick={onClick}
      onBlur={onBlur}
    >
      {prefix}
      {children}
      {appendix}
    </button>
  );
}
