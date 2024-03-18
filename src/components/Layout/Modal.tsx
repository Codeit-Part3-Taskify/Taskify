import ReactDOM from 'react-dom';
import { selectModal } from 'src/utils/selectModal';
import { useAtomValue } from 'jotai';
import { modalAtom } from 'src/store/store';

export default function Modal() {
  const modal = useAtomValue(modalAtom);

  return ReactDOM.createPortal(
    modal['status'] && (
      <>
        <div
          role="button"
          aria-label="Close Modal"
          className="fixed top-0 bottom-0 w-screen h-screen bg-black opacity-70"
        />
        <div className="fixed top-0 flex items-center justify-center w-screen h-screen">
          <div className="px-[2.8rem] pt-[3.2rem] pb-[2.8rem] bg-[#fff] rounded-[0.8rem]">
            {selectModal(modal['name'])}
          </div>
        </div>
      </>
    ),
    document.body
  );
}
