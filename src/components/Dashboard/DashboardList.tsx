import useDashboardList from 'src/hooks/useDashboardList';
import DashboardItem from './DashboardItem';

export default function DashboardList() {
  const dashboards = useDashboardList();

  return (
    <div className="flex flex-col items-center gap-[0.3rem] pt-[2.2rem] tablet:mx-[1.2rem]">
      {dashboards.map(dashboard => (
        <DashboardItem key={dashboard.id} dashboard={dashboard} />
      ))}
    </div>
  );
}
