import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import getDashboards from 'src/apis/getDashboards';

export default function useDashboardList() {
  const { data, isError } = useQuery({
    queryKey: ['dashboards'],
    queryFn: () => getDashboards()
  });
  const dashboards = data?.dashboards ?? [];

  const navigate = useNavigate();

  if (isError) {
    alert('로그인 에러');
    navigate('/login');
  }

  return dashboards;
}
