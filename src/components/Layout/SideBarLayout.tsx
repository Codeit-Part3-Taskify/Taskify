import DashboardList from '../Dashboard/DashboardList';
import AddDashboardHeader from '../Sidebar/AddDashboardHeader';
import LogoText from '../Sidebar/LogoText';

export default function Sidebar() {
  return (
    <aside className="w-[6.7rem] min-h-screen flex-col flex-shrink-0 pt-[2rem] tablet:w-[16rem] desktop:w-[30rem] desktop:px-[2.4rem]">
      <div className="sticky top-[2rem] left-0">
        <LogoText />
        <AddDashboardHeader />
        <DashboardList />
      </div>
    </aside>
  );
}
