import { ReactNode } from 'react';
import { ButtonType } from '@/types/common';

interface SecondaryButtonProps {
  className?: string;
  type?: ButtonType;
  prefix?: ReactNode;
  children?: ReactNode;
  appendix?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export default function SecondaryButton({
  className,
  type = 'submit',
  prefix,
  children,
  appendix,
  disabled = false,
  onClick
}: SecondaryButtonProps) {
  return (
    <button
      type={type}
      className={`border border-gray_D9D9D9 rounded-[0.4rem] text-violet bg-white_FFFFFF font-['Pretendard-500'] ${className}`} // 나머지 style은 className prop으로 설정
      disabled={disabled}
      onClick={onClick}
    >
      {prefix}
      {children}
      {appendix}
    </button>
  );
}
