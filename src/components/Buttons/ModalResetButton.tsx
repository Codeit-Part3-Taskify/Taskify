import { ReactNode } from 'react';
import Button from './Button';

interface ModalResetButtonProp {
  children?: ReactNode;
}

export default function ModalResetButton({ children }: ModalResetButtonProp) {
  return (
    <Button
      variant="secondary"
      type="reset"
      customStyles="w-[12rem] h-[4.8rem] rounded-[0.8rem] text-[#787486] text-[1.6rem]"
    >
      {children}
    </Button>
  );
}
