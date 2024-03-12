export default function Sidebar() {
  return (
    <aside className="bg-black w-[6.7rem] h-lvh border-r-[0.1rem] border-gray_D9D9D9 flex-col pt-[2rem] tablet:w-[16rem] desktop:w-[30rem] desktop:px-[2.4rem]">
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

      <div className="flex justify-center cursor-pointer desktop:justify-between">
        <span className="font-bold text-gray_787486 text-[1.2rem] pr-[2.4rem] mobile:hidden tablet:inline">
          Dash Boards
        </span>
        <img
          className="w-[2rem] h-[2rem] "
          src="/images/add-box.svg"
          alt="대시보드 추가 버튼"
        />
      </div>
    </aside>
  );
}
