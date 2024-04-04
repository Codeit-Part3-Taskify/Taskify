import { PropsWithChildren } from 'react';
import Button from './Button';

interface ModalSubmitButtonProp {
  disabled?: boolean;
  onClick?: () => void;
  customStyles?: string;
}

export default function ModalSubmitButton({
  customStyles,
  children,
  disabled,
  onClick
}: PropsWithChildren<ModalSubmitButtonProp>) {
  return (
    <Button
      variant="primary"
      type="submit"
      customStyles={`tablet:w-[12rem] tablet:h-[4.8rem] w-[13.8rem] h-[4.2rem] rounded-[0.8rem] font-medium tablet:text-[1.6rem] text-[1.4rem] ${customStyles}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
