import DashboardList from '../Dashboard/DashboardList';
import AddDashboardHeader from '../Sidebar/AddDashboardHeader';
import LogoText from '../Sidebar/LogoText';

export default function Sidebar() {
  return (
    <aside className="w-[6.7rem] h-lvh border-r-[0.1rem] border-gray_D9D9D9 flex-col pt-[2rem] tablet:w-[16rem] desktop:w-[30rem] desktop:px-[2.4rem]">
      <LogoText />
      <AddDashboardHeader />
      <DashboardList />
    </aside>
  );
}
