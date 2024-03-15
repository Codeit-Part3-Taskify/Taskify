import { useQuery, QueryObserverResult } from '@tanstack/react-query';
import getDashboards from '../../apis/getDashboards';
import { DashboardsResponse } from '../../types/api';
import DashboardItem from './DashboardItem';

export default function DashboardList() {
  const { data, isError }: QueryObserverResult<DashboardsResponse, Error> =
    useQuery({
      queryKey: ['Dashboards'],
      queryFn: () => getDashboards()
    });

  const dashboards = data?.dashboards ?? [];

  // TODO 에러페이지 만들기
  // if (isError) return <ErrorPage />;

  return (
    <div className="flex flex-col items-center gap-[3.8rem] pt-[3.8rem] tablet:gap-[2.7rem] tablet:items-start tablet:ml-[2.4rem] desktop:ml-0">
      {dashboards.map(dashboard => (
        <DashboardItem key={dashboard.id} dashboard={dashboard} />
      ))}
    </div>
  );
}
