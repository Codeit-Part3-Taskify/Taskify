import { Dashboard } from 'src/types/dashboardTypes';
import { usePagenationDashboardList } from 'src/hooks/usePagenationDashboardList';
import DashboardItem from './DashboardItem';
import PagenationButtons from '../Buttons/PagenationButtons';

export default function DashboardList() {
  const {
    data,
    allPage,
    nowPage,
    handleBackwardButtonClick,
    handleForwardButtonClick
  } = usePagenationDashboardList();

  const dashboards = data?.dashboards ?? [];

  return (
    <div className="flex flex-col items-center gap-[0.3rem] pt-[2.2rem] tablet:mx-[1.2rem]">
      {dashboards.map((dashboard: Dashboard) => (
        <DashboardItem key={dashboard.id} dashboard={dashboard} />
      ))}
      <PagenationButtons
        allPage={allPage}
        nowPage={nowPage}
        handleBackwardButtonClick={handleBackwardButtonClick}
        handleForwardButtonClick={handleForwardButtonClick}
      />
    </div>
  );
}
