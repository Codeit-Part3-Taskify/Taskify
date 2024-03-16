import plusBtn from 'src/assets/images/plus.svg';
import Button from '../Buttons/Button';

export default function AddColumn() {
  return (
    <Button
      variant="ghost"
      customStyles="flex-shrink-0 mt-[6.8rem] ml-[2rem] p-[2.45rem] rounded-[0.6rem] gap-[1.2rem] w-[35.4rem] h-[7rem]"
      appendix={
        <img
          src={plusBtn}
          alt="더하기 버튼"
          className="w-[2.2rem] h-[2.2rem] bg-[#F1EFFD] rounded"
        />
      }
    >
      <span className="text-[1.8rem] font-bold">새로운 컬럼 추가하기</span>
    </Button>
  );
}
