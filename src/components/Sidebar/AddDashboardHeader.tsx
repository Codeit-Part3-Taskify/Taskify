export default function AddDashboardHeader() {
  return (
    <header className="flex items-center justify-center desktop:justify-between">
      <span className="font-bold text-gray_787486 text-[1.2rem] pr-[2.4rem] mobile:hidden tablet:inline">
        Dash Boards
      </span>
      <img
        className="w-[2rem] h-[2rem]"
        src="/images/add-box.svg"
        alt="대시보드 추가 버튼"
      />
    </header>
  );
}
