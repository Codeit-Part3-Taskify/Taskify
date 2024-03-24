import plusBtn from 'src/assets/images/plus.svg';
import { useSetAtom } from 'jotai';
import { modalAtom } from 'src/store/store';
import Button from '../../Buttons/Button';

export default function AddColumn() {
  const setModal = useSetAtom(modalAtom);
  return (
    <div className="flex justify-center border-r border-r-[#EEEEEE]">
      <Button
        variant="secondary"
        customStyles="m-[1.2rem] p-[2rem] rounded-[0.6rem] gap-[1.2rem] min-w-[28.4rem] w-[calc(100%-2.4rem)] tablet: tablet:w-[calc(100%-4rem)] tablet:m-[2rem] tablet:p-[2.45rem] desktop:h-[7rem]"
        appendix={
          <img
            src={plusBtn}
            alt="더하기 버튼"
            className="w-[2rem] h-[2rem] bg-[#F1EFFD] rounded tablet:w-[2.2rem] tablet:h[2.2rem]"
          />
        }
        onClick={() =>
          setModal(prev => ({
            ...prev,
            name: 'createColumn',
            status: true
          }))
        }
      >
        <span className="text-[1.6rem] font-bold tablet:text-[1.8rem]">
          새로운 컬럼 추가하기
        </span>
      </Button>
    </div>
  );
}
