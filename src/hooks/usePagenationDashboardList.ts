import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import getDashboards from 'src/apis/getDashboards';
import { PAGENATION_SIZE } from 'src/constants/pagenation';

export const usePagenationDashboardList = (pageSize: number) => {
  const [allPage, setAllPage] = useState(1);
  const [nowPage, setNowPage] = useState(1);

  const queryKey =
    pageSize === PAGENATION_SIZE.DASHBOARD.MYDASHBOARD
      ? ['myDashboards', nowPage]
      : ['dashboards', nowPage];

  const { data, isLoading } = useQuery({
    queryKey,
    queryFn: () => getDashboards(nowPage, pageSize)
  });

  useEffect(() => {
    const totalCount = data?.totalCount ?? 1;
    const calculatedAllPage = Math.ceil(totalCount / pageSize);
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
