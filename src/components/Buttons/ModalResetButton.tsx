import { ReactNode } from 'react';
import { useSetAtom } from 'jotai';
import { modalAtom } from 'src/store/store';
import Button from './Button';

interface ModalResetButtonProp {
  children?: ReactNode;
}

export default function ModalResetButton({ children }: ModalResetButtonProp) {
  const setModal = useSetAtom(modalAtom);
  return (
    <Button
      variant="secondary"
      type="reset"
      customStyles="w-[12rem] h-[4.8rem] rounded-[0.8rem] text-[#787486] text-[1.6rem]"
      onClick={() => setModal(prev => ({ ...prev, status: false }))}
    >
      {children}
    </Button>
  );
}
