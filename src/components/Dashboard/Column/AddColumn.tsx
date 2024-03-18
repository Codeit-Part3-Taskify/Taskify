import plusBtn from 'src/assets/images/plus.svg';
import { useSetAtom } from 'jotai';
import { modalAtom } from 'src/store/store';
import Button from '../../Buttons/Button';

export default function AddColumn() {
  const setModal = useSetAtom(modalAtom);
  return (
    <Button
      variant="secondary"
      customStyles="flex-shrink-0 mt-[6.8rem] ml-[2rem] p-[2.45rem] rounded-[0.6rem] gap-[1.2rem] w-[35.4rem] h-[7rem]"
      appendix={
        <img
          src={plusBtn}
          alt="더하기 버튼"
          className="w-[2.2rem] h-[2.2rem] bg-[#F1EFFD] rounded"
        />
      }
      onClick={() => setModal(() => ({ name: 'createColumn', status: true }))}
    >
      <span className="text-[1.8rem] font-bold">새로운 컬럼 추가하기</span>
    </Button>
  );
}
