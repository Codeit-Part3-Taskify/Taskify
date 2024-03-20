import { useEffect, useState } from 'react';
import { Params, useParams } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { PAGENATION_SIZE } from 'src/constants/pagenation';
import getDashboardInvitations from 'src/apis/getDashboardInvitations';
import deleteDashboardInvitation from 'src/apis/deleteDashboardInvitation';

export const usePagenationDashboardInvitations = () => {
  const [allPage, setAllPage] = useState(1);
  const [nowPage, setNowPage] = useState(1);
  const queryClient = useQueryClient();
  const { boardId } = useParams<Params>();

  const { data, isLoading } = useQuery({
    queryKey: ['invitations', boardId, nowPage],
    queryFn: () => getDashboardInvitations(boardId, nowPage)
  });

  const { mutate } = useMutation({
    mutationFn: ({ invitationId }: { invitationId: number }) =>
      deleteDashboardInvitation(boardId, invitationId),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['invitations', boardId]
      });
    }
  });

  useEffect(() => {
    setAllPage(
      Math.ceil((data?.totalCount ?? 1) / PAGENATION_SIZE.DASHBOARD.INVITATIONS)
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

  const handleDeleteButtonClick = (invitationId: number) => {
    if (isLoading) {
      return;
    }
    mutate({ invitationId });
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
