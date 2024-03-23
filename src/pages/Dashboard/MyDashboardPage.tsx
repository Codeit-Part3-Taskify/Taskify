import DashboardList from 'src/components/Dashboard/DashboardList';
import Invitations from 'src/components/Dashboard/MyDashboard/Invitations';

export default function MyDashboardPage() {
  return (
    <main className="p-[4rem]">
      <DashboardList MyDashboardPage="MyDashboardPage" />
      <Invitations />
    </main>
  );
}
