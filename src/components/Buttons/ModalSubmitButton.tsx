import { ReactNode } from 'react';
import Button from './Button';

interface ModalSubmitButtonProp {
  children?: ReactNode;
  disabled?: boolean;
}

export default function ModalSubmitButton({
  children,
  disabled
}: ModalSubmitButtonProp) {
  return (
    <Button
      variant="primary"
      type="submit"
      customStyles="w-[12rem] h-[4.8rem] rounded-[0.8rem] font-medium text-[1.6rem]"
      disabled={disabled}
    >
      {children}
    </Button>
  );
}
