import { NavLink } from 'react-router-dom';
import crown from 'src/assets/images/crown.svg';
import arrow from 'src/assets/images/arrow-forward-black.svg';
import { COLOR_VARIANTS } from 'src/constants/colors';
import { Dashboard } from '../../types/dashboardTypes';

interface DashboardItemProps {
  MyDashboardPage?: string;
  dashboard: Dashboard;
}

export default function DashboardItem({
  dashboard,
  MyDashboardPage
}: DashboardItemProps) {
  const sidebarStyled =
    'w-[4rem] h-[4rem] rounded-[0.4rem] flex justify-center items-center cursor-pointer tablet:gap-[1.6rem] tablet:w-[13.4rem] tablet:h-[4.3rem] tablet:justify-start tablet:pl-[1rem] desktop:w-[27.6rem] desktop:h-[4.5rem] desktop:pl-[1.2rem] hover:bg-violet_8';

  const mydashboardPageStyled =
    'w-[26rem] h-[5.8rem] rounded-[0.8rem] border-solid border-[0.1rem] border-gray_D9D9D9 bg-white flex flex-row justify-between items-center gap-[1.2rem] px-[2rem] hover:bg-violet_8 desktop:w-[33.2rem] desktop:h-[7rem]';

  return (
    <NavLink
      to={`/dashboard/${dashboard.id}`}
      className={({ isActive }) => (isActive ? `bg-violet_8` : ``)}
    >
      <div className={MyDashboardPage ? mydashboardPageStyled : sidebarStyled}>
        <div className="flex items-center gap-[1.2rem]">
          <div
            className={`${
              COLOR_VARIANTS[dashboard.color as keyof typeof COLOR_VARIANTS] ??
              'bg-green'
            } w-[0.8rem] h-[0.8rem] rounded-full`}
          />
          <div
            className={
              MyDashboardPage
                ? 'flex items-center gap-[0.4rem] tablet:flex desktop:gap-[0.6rem]'
                : 'flex items-center gap-[0.4rem] mobile:hidden tablet:flex desktop:gap-[0.6rem]}'
            }
          >
            <div
              className={
                MyDashboardPage
                  ? 'text-black text-[1.4rem] tablet:text-[1.6rem]'
                  : 'max-w-[7rem] text-[1.6rem] font-bold text-gray_787486 overflow-hidden text-ellipsis whitespace-nowrap desktop:max-w-[22rem]'
              }
            >
              {dashboard.title}
            </div>
            {dashboard.createdByMe ? (
              <img
                className="w-[1.7rem] h-[1.4rem]"
                src={crown}
                alt="내가 만든 대시보드를 표시하는 크라운 이미지"
              />
            ) : null}
          </div>
        </div>
        {MyDashboardPage ? (
          <img src={arrow} alt="선택한 대시보드로 가는 화살표" />
        ) : null}
      </div>
    </NavLink>
  );
}
