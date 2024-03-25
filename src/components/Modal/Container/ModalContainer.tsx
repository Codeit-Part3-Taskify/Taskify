import { useSetAtom } from 'jotai';
import React, { useEffect } from 'react';
import { modalAtom } from 'src/store/store';

interface Props {
  children: React.ReactNode;
}

export default function ModalContainer({ children }: Props) {
  const setModal = useSetAtom(modalAtom);
  return (
    <>
      <div className="fixed top-0 bottom-0 w-screen h-screen bg-black opacity-70" />
      <div className="fixed top-0 flex items-center justify-center w-screen h-screen ">
        <div className="relative tablet:px-[2.8rem] px-[2rem] tablet:pt-[3.2rem] pt-[2.8rem] pb-[2.8rem] bg-[#fff] rounded-[0.8rem]">
          {children}
        </div>
      </div>
    </>
  );
}
