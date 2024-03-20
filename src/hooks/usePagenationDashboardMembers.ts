import { useEffect, useState } from 'react';
import { Params, useParams } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import getDashboardMembers from 'src/apis/getDashboardMembers';
import { PAGENATION_SIZE } from 'src/constants/pagenation';
import deleteDashboardMember from 'src/apis/deleteDashboardMember';

export const usePagenationDashboardMembers = () => {
  const [allPage, setAllPage] = useState(1);
  const [nowPage, setNowPage] = useState(1);
  const queryClient = useQueryClient();
  const { boardId } = useParams<Params>();

  const { data, isLoading } = useQuery({
    queryKey: ['dashboardMembers', boardId, nowPage],
    queryFn: () => getDashboardMembers(boardId, nowPage)
  });

  const { mutate } = useMutation({
    mutationFn: ({ memberId }: { memberId: number }) =>
      deleteDashboardMember(memberId),

    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ['dashboardMembers', boardId, nowPage]
      });
    }
  });

  useEffect(() => {
    setAllPage(
      Math.ceil((data?.totalCount ?? 1) / PAGENATION_SIZE.DASHBOARD.MEMBERS)
    );
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

  const handleDeleteButtonClick = (memberId: number) => {
    if (isLoading) {
      return;
    }
    mutate({ memberId });
  };

  return {
    mutate,
    boardId,
    data,
    allPage,
    nowPage,
    setNowPage,
    handleBackwardButtonClick,
    handleForwardButtonClick,
    handleDeleteButtonClick
  };
};
