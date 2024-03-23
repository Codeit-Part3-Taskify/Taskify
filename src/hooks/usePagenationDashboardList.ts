import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { PAGENATION_SIZE } from 'src/constants/pagenation';
import getDashboards from 'src/apis/getDashboards';

export const usePagenationDashboardList = () => {
  const [allPage, setAllPage] = useState(1);
  const [nowPage, setNowPage] = useState(1);

  const { data, isLoading } = useQuery({
    queryKey: ['dashboards', nowPage],
    queryFn: () => getDashboards(nowPage)
  });

  useEffect(() => {
    const totalCount = data?.totalCount ?? 1;
    const calculatedAllPage = Math.ceil(
      totalCount / PAGENATION_SIZE.DASHBOARD.SIDEBAR
    );
    setAllPage(calculatedAllPage === 0 ? 1 : calculatedAllPage);
  }, [data?.totalCount]);

  const handleBackwardButtonClick = () => {
    if (nowPage === 1 || isLoading) {
      return;
    }
    setNowPage(nowPage - 1);
  };

  const handleForwardButtonClick = () => {
    if (nowPage === allPage || isLoading) {
      return;
    }
    setNowPage(nowPage + 1);
  };

  return {
    data,
    allPage,
    nowPage,
    setNowPage,
    handleBackwardButtonClick,
    handleForwardButtonClick
  };
};
