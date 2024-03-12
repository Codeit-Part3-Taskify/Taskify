// 작업중
export default function CardDetail() {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[#333236] text-[2.4rem] font-bold">
        새로운 일정 관리 Taskify
      </span>
      <div className="flex gap-[2.4rem">
        <img
          src="/images/kebab.svg"
          alt="케밥버튼"
          className="w-[2.8rem] h-[2.8rem]"
        />
        <img
          src="/images/close.svg"
          alt="닫기버튼"
          className="w-[3.2rem] h-[3.2rem]"
        />
      </div>
    </div>
  );
}
