import DashboardList from 'src/components/Dashboard/DashboardList';
import Invitations from 'src/components/Dashboard/MyDashboard/Invitations';
import { Helmet } from 'react-helmet-async';

export default function MyDashboardPage() {
  return (
    <main className="p-[4rem]">
      <Helmet>
        <title>Taskify 나의대시보드</title>
      </Helmet>
      <DashboardList MyDashboardPage="MyDashboardPage" />
      <Invitations />
    </main>
  );
}
