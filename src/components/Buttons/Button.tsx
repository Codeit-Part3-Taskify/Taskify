import { ReactNode } from 'react';
import { ButtonType, ButtonVariant } from '@/types/common';

interface ButtonProps {
  variant: ButtonVariant; // 버튼 종류
  customStyles?: string; // 추가 스타일
  type?: ButtonType;
  disabled?: boolean;
  onClick?: () => void;
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
  prefix,
  children,
  appendix
}: ButtonProps) {
  // variant에 따라 적용할 스타일을 결정
  const basicStyles = `border rounded-[0.4rem] font-['Pretendard-500']`;
  const variantStyles = {
    primary: `${basicStyles} text-white_FFFFFF bg-violet`,
    secondary: `${basicStyles} border-gray_D9D9D9 text-violet bg-white_FFFFFF`,
    reset: `${basicStyles} text-gray_787486`
  };

  return (
    <button
      type={type}
      className={`${variantStyles[variant]} ${customStyles}`}
      disabled={disabled}
      onClick={onClick}
    >
      {prefix}
      {children}
      {appendix}
    </button>
  );
}
