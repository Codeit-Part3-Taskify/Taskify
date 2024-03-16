import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';
import { dashboardsAtom } from '../../store/store';
import DashboardItem from '../../components/Dashboard/DashboardItem';

export default function MyDashboardPage() {
  const [{ data, isError }] = useAtom(dashboardsAtom);
  const dashboards = data?.dashboards ?? [];

  const navigate = useNavigate();

  if (isError) {
    alert('로그인 에러');
    navigate('/login');
  }

  return (
    <>
      {dashboards.map(dashboard => (
        <DashboardItem key={dashboard.id} dashboard={dashboard} />
      ))}
      <div>초대받은 대시보드</div>
      <div>아직 초대받은 대시보드가 없어요</div>
    </>
  );
}
