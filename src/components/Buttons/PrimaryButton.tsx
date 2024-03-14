import { ReactNode } from 'react';
import { ButtonType } from '@/types/common';

interface PrimaryButtonProps {
  className?: string;
  type?: ButtonType;
  prefix?: ReactNode;
  children?: ReactNode;
  appendix?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export default function PrimaryButton({
  className,
  type = 'submit',
  prefix,
  children,
  appendix,
  disabled = false,
  onClick
}: PrimaryButtonProps) {
  return (
    <button
      type={type}
      className={`${className} rounded-lg text-white_FFFFFF bg-violet font-['Pretendard-500']`} // 나머지 style은 className prop으로 설정
      disabled={disabled}
      onClick={onClick}
    >
      {prefix}
      {children}
      {appendix}
    </button>
  );
}
