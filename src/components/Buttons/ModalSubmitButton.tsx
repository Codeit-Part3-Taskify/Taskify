import { PropsWithChildren, ReactNode } from 'react';
import Button from './Button';

interface ModalSubmitButtonProp {
  disabled?: boolean;
}

export default function ModalSubmitButton(
  props: PropsWithChildren<ModalSubmitButtonProp>
) {
  return (
    <Button
      variant="primary"
      type="submit"
      customStyles="w-[12rem] h-[4.8rem] rounded-[0.8rem] font-medium text-[1.6rem]"
    >
      {props.children}
    </Button>
  );
}
