import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function Modal({ children }: Props) {
  return (
    <div>
      <div className="fixed w-screen h-screen bg-black opacity-70" />
      <div className="fixed w-screen h-screen flex justify-center items-center">
        <div className="px-[28px] pt-[32px] pb-[28px] bg-[#fff] rounded-lg">
          {children}
        </div>
      </div>
    </div>
  );
}
