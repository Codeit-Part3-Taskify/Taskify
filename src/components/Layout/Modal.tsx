import type { ModalType } from 'src/types/modalTypes';
import ReactDOM from 'react-dom';
import { selectModal } from 'src/utils/selectModal';

interface Props {
  modalName: ModalType;
}

export default function Modal({ modalName }: Props) {
  return ReactDOM.createPortal(
    <>
      <div
        role="button"
        aria-label="Close Modal"
        className="fixed top-0 bottom-0 w-screen h-screen bg-black opacity-70"
      />
      <div className="fixed top-0 flex items-center justify-center w-screen h-screen">
        <div className="px-[2.8rem] pt-[3.2rem] pb-[2.8rem] bg-[#fff] rounded-[0.8rem]">
          {selectModal(modalName)}
        </div>
      </div>
    </>,
    document.body
  );
}
