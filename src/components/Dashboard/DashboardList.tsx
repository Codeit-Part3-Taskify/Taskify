import useDashboardList from 'src/hooks/useDashboardList';
import { Dashboard } from 'src/types/dashboardTypes';
import DashboardItem from './DashboardItem';

export default function DashboardList() {
  const dashboards = useDashboardList();

  return (
    <div className="flex flex-col items-center gap-[0.3rem] pt-[2.2rem] tablet:mx-[1.2rem]">
      {dashboards.map((dashboard: Dashboard) => (
        <DashboardItem key={dashboard.id} dashboard={dashboard} />
      ))}
    </div>
  );
}
