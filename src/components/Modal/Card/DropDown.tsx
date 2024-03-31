import { useAtom } from 'jotai';
import useDeleteCard from 'src/hooks/useDeleteCard';
import { modalAtom } from 'src/store/store';

const DropDownBtnStyle =
  'w-[8.1rem] h-[3.2rem] text-[1.4rem] rounded-[0.4rem] py-[0.4rem] px-[1.6rem] hover:text-[#5534DA] hover:bg-[#F1EFFD]';
export default function DropDown() {
  const [modal, setModal] = useAtom(modalAtom);
  const deleteCardMutate = useDeleteCard();
  return (
    <div className="absolute top-[4rem] flex flex-col gap-[0.6rem] w-[9.3rem] h-[8.2rem] p-[0.6rem] border border-solid bg-white border-[#D9D9D9] rounded-[0.6rem] shadow-[0_4px_20px_0_rgba(0,0,0,0.08)]">
      <button
        className={DropDownBtnStyle}
        onClick={() => setModal(prev => ({ ...prev, name: 'updateCard' }))}
      >
        수정하기
      </button>
      <button
        className={DropDownBtnStyle}
        onClick={() => {
          deleteCardMutate(modal.cardId);
          setModal(prev => ({ ...prev, status: false }));
        }}
      >
        삭제하기
      </button>
    </div>
  );
}
