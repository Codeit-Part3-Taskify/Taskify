import BackwardIcon from 'src/assets/images/arrow-backward-black.svg';

export default function ReturnButton() {
  return (
    <button
      className="flex items-center text-[1.6rem] font-medium"
      type="button"
    >
      <img
        className="w-[2rem] h-[2rem]"
        src={BackwardIcon}
        alt="뒤로가기 아이콘"
      />
      돌아가기
    </button>
  );
}
