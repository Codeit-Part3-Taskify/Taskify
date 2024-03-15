import { Dashboard } from '../../types/api';

export default function DashboardItem({ dashboard }: { dashboard: Dashboard }) {
  const colorVariants: Record<string, string> = {
    '#7AC555': 'bg-green',
    '#760DDE': 'bg-purple',
    '#FFA500': 'bg-orange',
    '#76A5EA': 'bg-blue',
    '#E876EA': 'bg-pink'
  };

  return (
    <div className="flex flex-row items-center cursor-pointer tablet:gap-[1.6rem]">
      <div
        className={`${colorVariants[dashboard.color] ?? 'bg-green'} w-[0.8rem] h-[0.8rem] rounded-full`}
      />
      <div className="flex items-center gap-[0.6rem] mobile:hidden tablet:flex">
        <div className="max-w-[8.6rem] text-[1.6rem] font-bold text-gray_787486 overflow-hidden text-ellipsis whitespace-nowrap	desktop:max-w-[22rem]">
          {dashboard.title}
        </div>
        {dashboard.createdByMe ? (
          <img
            className="w-[1.7rem] h-[1.4rem]"
            src="/images/crown.svg"
            alt="내가 만든 대시보드를 표시하는 크라운 이미지"
          />
        ) : null}
      </div>
    </div>
  );
}
