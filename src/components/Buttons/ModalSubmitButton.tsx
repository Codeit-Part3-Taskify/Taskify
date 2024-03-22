import { PropsWithChildren } from 'react';
import Button from './Button';

interface ModalSubmitButtonProp {
  disabled?: boolean;
  onClick?: () => void;
}

export default function ModalSubmitButton({
  children,
  disabled,
  onClick
}: PropsWithChildren<ModalSubmitButtonProp>) {
  return (
    <Button
      variant="primary"
      type="submit"
      customStyles="tablet:w-[12rem] tablet:h-[4.8rem] w-[13.8rem] h-[4.2rem] rounded-[0.8rem] font-medium text-[1.6rem]"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
