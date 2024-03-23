import { useSetAtom } from 'jotai';
import { PropsWithChildren } from 'react';
import { modalAtom } from 'src/store/store';
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
  const setModal = useSetAtom(modalAtom);
  return (
    <Button
      variant="primary"
      type="submit"
      customStyles="tablet:w-[12rem] tablet:h-[4.8rem] w-[13.8rem] h-[4.2rem] rounded-[0.8rem] font-medium tablet:text-[1.6rem] text-[1.4rem]"
      disabled={disabled}
      onClick={() => setModal(prev => ({ ...prev, status: false }))}
    >
      {children}
    </Button>
  );
}
