function DashboardItem() {
  return (
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
  );
}

export default function DashboardList() {
  return (
    <div className="flex flex-col items-center gap-[3.8rem] pt-[3.8rem] desktop:items-start">
      <DashboardItem />
    </div>
  );
}
