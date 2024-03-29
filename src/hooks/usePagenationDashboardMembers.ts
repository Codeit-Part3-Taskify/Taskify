import { useEffect, useState } from 'react';
import { Params, useParams } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import getDashboardMembers from 'src/apis/getDashboardMembers';
import { PAGENATION_SIZE } from 'src/constants/pagenation';
import deleteDashboardMember from 'src/apis/deleteDashboardMember';

export const usePagenationDashboardMembers = () => {
  const [allPage, setAllPage] = useState(1);
  const [nowPage, setNowPage] = useState(1);
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const queryClient = useQueryClient();
  const { boardId } = useParams<Params>();

  const { data, isLoading } = useQuery({
    queryKey: ['dashboardMembers', boardId, nowPage],
    queryFn: () =>
      getDashboardMembers(boardId, nowPage, PAGENATION_SIZE.DASHBOARD.MEMBERS)
  });

  const { mutate, isPending } = useMutation({
    mutationFn: ({ memberId }: { memberId: number }) =>
      deleteDashboardMember(memberId),

    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ['dashboardMembers', boardId, nowPage]
      });
      queryClient.refetchQueries({
        queryKey: ['navDashboardMembers', boardId]
      });
    }
  });

  useEffect(() => {
    const totalCount = data?.totalCount ?? 1;
    const calculatedAllPage = Math.ceil(
      totalCount / PAGENATION_SIZE.DASHBOARD.MEMBERS
    );
    setAllPage(calculatedAllPage === 0 ? 1 : calculatedAllPage);
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

  const handleDeleteButtonClick = (memberId: number) => {
    if (isPending) {
      return;
    }
    mutate({ memberId });
  };

  return {
    mutate,
    boardId,
    data,
    isLoading,
    allPage,
    nowPage,
    setNowPage,
    handleBackwardButtonClick,
    handleForwardButtonClick,
    handleDeleteButtonClick,
    isStart,
    isEnd
  };
};
