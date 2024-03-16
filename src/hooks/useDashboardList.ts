import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';
import { dashboardsAtom } from '../store/store';

export default function useDashboardList() {
  const [{ data, isError }] = useAtom(dashboardsAtom);
  const dashboards = data?.dashboards ?? [];

  const navigate = useNavigate();

  if (isError) {
    alert('로그인 에러');
    navigate('/login');
  }

  return dashboards;
}
