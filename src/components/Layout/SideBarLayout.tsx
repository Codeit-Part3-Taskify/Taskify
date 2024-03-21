import { Outlet } from 'react-router-dom';
import DashboardList from '../Dashboard/DashboardList';
import AddDashboardHeader from '../Sidebar/AddDashboardHeader';
import LogoText from '../Sidebar/LogoText';

export default function Sidebar() {
  return (
    <div className="flex">
      <aside className="w-[6.7rem] min-h-screen border-r-[0.1rem] border-gray_D9D9D9 flex-col flex-shrink-0 pt-[2rem] tablet:w-[16rem] desktop:w-[30rem] desktop:px-[2.4rem] bg-white">
        <LogoText />
        <AddDashboardHeader />
        <DashboardList />
      </aside>
      <Outlet />
    </div>
  );
}
