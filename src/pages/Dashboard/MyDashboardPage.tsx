import useDashboardList from 'src/hooks/useDashboardList';
import { Dashboard } from 'src/types/dashboardTypes';
import DashboardItem from '../../components/Dashboard/DashboardItem';

export default function MyDashboardPage() {
  const dashboards = useDashboardList();

  return (
    <>
      {dashboards.map((dashboard: Dashboard) => (
        <DashboardItem key={dashboard.id} dashboard={dashboard} />
      ))}
      <div>초대받은 대시보드</div>
      <div>아직 초대받은 대시보드가 없어요</div>
    </>
  );
}
