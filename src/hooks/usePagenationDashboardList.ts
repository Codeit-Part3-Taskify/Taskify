import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import getDashboards from 'src/apis/getDashboards';
import { PAGENATION_SIZE } from 'src/constants/pagenation';

export const usePagenationDashboardList = (pageSize: number) => {
  const [allPage, setAllPage] = useState(1);
  const [nowPage, setNowPage] = useState(1);
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const queryKey =
    pageSize === PAGENATION_SIZE.DASHBOARD.MYDASHBOARD
      ? ['myDashboards', nowPage]
      : ['dashboards', nowPage];

  const { data, isLoading } = useQuery({
    queryKey,
    queryFn: () => getDashboards(nowPage, pageSize)
  });

  const totalCount = data?.totalCount;

  useEffect(() => {
    if (totalCount) {
      const calculatedAllPage = Math.ceil(
        totalCount / PAGENATION_SIZE.DASHBOARD.INVITATIONS
      );
      setAllPage(calculatedAllPage === 0 ? 1 : calculatedAllPage);
    } else {
      setAllPage(0);
    }
  }, [data?.totalCount]);

  useEffect(() => {
    if (nowPage === 1) {
      setIsStart(true);
    } else {
      setIsStart(false);
    }
    if (nowPage === allPage) {
      setIsEnd(true);
    } else {
      setIsEnd(false);
    }
  }, [nowPage, allPage]);

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
    handleForwardButtonClick,
    isStart,
    isEnd
  };
};
