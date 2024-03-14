import plusBtn from 'src/assets/images/plus.svg';

export default function AddColumn() {
  return (
    <button className="flex-shrink-0 mt-[6.8rem] ml-[2rem] p-[2.45rem] bg-white border border-solid border-[#D9D9D9] rounded-[0.6rem] flex justify-center items-center gap-[1.2rem] w-[35.4rem] h-[7rem]">
      <span className="text-[1.8rem] font-bold">새로운 컬럼 추가하기</span>
      <img
        src={plusBtn}
        alt="더하기 버튼"
        className="w-[2.2rem] h-[2.2rem] bg-[#F1EFFD] rounded"
      />
    </button>
  );
}
