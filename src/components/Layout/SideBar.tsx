export default function Sidebar() {
  return (
    <aside className="w-[6.7rem] h-lvh border-r-[0.1rem] border-gray_D9D9D9 flex-col pt-[2rem] tablet:w-[16rem] desktop:w-[30rem] desktop:px-[2.4rem]">
      <div className="pb-[3.8rem] cursor-pointer flex items-center justify-center tablet:pb-[6rem] desktop:justify-start">
        <img
          className="w-[2.3rem] h-[2.7rem]"
          src="/images/logo.svg"
          alt="홈으로 가는 Taskify 로고"
        />
        <img
          className="w-[8rem] h-[2.2rem] mobile:hidden tablet:inline"
          src="/images/Taskify.svg"
          alt="홈으로 가는 Taskify 텍스트"
        />
      </div>

      <div className="flex items-center justify-center desktop:justify-between">
        <span className="font-bold text-gray_787486 text-[1.2rem] pr-[2.4rem] mobile:hidden tablet:inline">
          Dash Boards
        </span>
        <img
          className="w-[2rem] h-[2rem]"
          src="/images/add-box.svg"
          alt="대시보드 추가 버튼"
        />
      </div>

      <div className="flex flex-col items-center gap-[3.8rem] pt-[3.8rem] desktop:items-start">
        <div className="flex flex-row items-center cursor-pointer tablet:gap-[1.6rem]">
          <div className="bg-green w-[0.8rem] h-[0.8rem] rounded-full" />
          <div className="flex items-center gap-[0.6rem] mobile:hidden tablet:flex">
            <div className="max-w-[8.6rem] text-[1.6rem] font-bold text-gray_787486 overflow-hidden text-ellipsis whitespace-nowrap	desktop:max-w-[22rem]">
              코드잇
            </div>
            <img
              className="w-[1.7rem] h-[1.4rem]"
              src="/images/crown.svg"
              alt="내가 만든 대시보드를 표시하는 크라운 이미지"
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
