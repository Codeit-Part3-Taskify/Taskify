import { Dashboard } from 'src/types/dashboardTypes';
import { usePagenationDashboardList } from 'src/hooks/usePagenationDashboardList';
import { PAGENATION_SIZE } from 'src/constants/pagenation';
import PagenationButtons from '../Buttons/PagenationButtons';
import DashboardItem from './DashboardItem';
import AddDashboard from './MyDashboard/AddDashboard';

interface MyDashboardPageProps {
  MyDashboardPage?: string;
}

export default function DashboardList({
  MyDashboardPage
}: MyDashboardPageProps) {
  const {
    data,
    allPage,
    nowPage,
    handleBackwardButtonClick,
    handleForwardButtonClick,
    isStart,
    isEnd
  } = usePagenationDashboardList(
    MyDashboardPage
      ? PAGENATION_SIZE.DASHBOARD.MYDASHBOARD
      : PAGENATION_SIZE.DASHBOARD.SIDEBAR
  );

  const dashboards = data?.dashboards ?? [];

  return (
    <div
      className={
        MyDashboardPage
          ? 'flex flex-col items-end gap-[1rem]'
          : 'flex flex-col items-center gap-[0.3rem] pt-[2.2rem] tablet:mx-[1.2rem]'
      }
    >
      <div
        className={
          MyDashboardPage
            ? 'flex flex-col gap-[0.8rem] tablet:gap-[1rem] tablet:grid grid-cols-2 desktop:grid-cols-3'
            : ''
        }
      >
        {MyDashboardPage && <AddDashboard />}
        {dashboards.map((dashboard: Dashboard) => (
          <DashboardItem
            key={dashboard.id}
            dashboard={dashboard}
            MyDashboardPage={MyDashboardPage}
          />
        ))}
      </div>
      <div className="fixed top-1/2">
        <PagenationButtons
          allPage={allPage}
          nowPage={nowPage}
          handleBackwardButtonClick={handleBackwardButtonClick}
          handleForwardButtonClick={handleForwardButtonClick}
          isSidebar
          isStart={isStart}
          isEnd={isEnd}
        />
      </div>
    </div>
  );
}
