import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';
import { Dashboard } from 'src/types/api';
import { dashboardsAtom } from '../../store/store';
import DashboardItem from './DashboardItem';

export default function DashboardList() {
  const [{ data, isError }] = useAtom(dashboardsAtom);
  const dashboards = data?.dashboards ?? [];

  const navigate = useNavigate();

  if (isError) {
    alert('로그인 에러');
    navigate('/login');
  }

  return (
    <div className="flex flex-col items-center gap-[0.3rem] pt-[2.2rem] tablet:mx-[1.2rem]">
      {dashboards.map((dashboard: Dashboard) => (
        <DashboardItem key={dashboard.id} dashboard={dashboard} />
      ))}
    </div>
  );
}
