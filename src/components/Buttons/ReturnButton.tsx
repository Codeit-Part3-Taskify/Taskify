import BackwardIcon from '../../assets/images/arrow-backward-black.svg';

export default function ReturnButton() {
  return (
    <button
      className="flex items-center text-[1.6rem] font-medium"
      type="button"
    >
      <img
        className="w-[2.8rem] h-[2.8rem]"
        src={BackwardIcon}
        alt="뒤로가기 아이콘"
      />
      돌아가기
    </button>
  );
}
