import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function Modal({ children }: Props) {
  return (
    <div>
      <div className="fixed w-screen h-screen bg-black opacity-70" />
      <div className="fixed flex items-center justify-center w-screen h-screen">
        <div className="px-[2.8rem] pt-[3.2rem] pb-[2.8rem] bg-[#fff] rounded-[0.8rem]">
          {children}
        </div>
      </div>
    </div>
  );
}
