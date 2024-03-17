import { KeyboardEvent, MouseEvent, ReactNode, useRef } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
  children: ReactNode;
  onClick: () => void;
};

export default function Modal({ children, onClick }: ModalProps) {
  const background = useRef<HTMLDivElement>(null);

  const handleModalBackground = (
    e: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>
  ) => {
    if (e.target === background.current) {
      onClick();
    }
  };

  return createPortal(
    <div
      ref={background}
      onClick={handleModalBackground}
      onKeyDown={handleModalBackground}
      role="presentation"
      className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-black/70"
    >
      <div className="px-[2.8rem] pt-[3.2rem] pb-[2.8rem] bg-[#fff] rounded-[0.8rem]">
        {children}
      </div>
    </div>,
    document.body
  );
}
