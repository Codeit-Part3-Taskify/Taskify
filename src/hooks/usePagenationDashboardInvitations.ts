import { useEffect, useState } from 'react';
import { Params, useParams } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { PAGENATION_SIZE } from 'src/constants/pagenation';
import getDashboardInvitations from 'src/apis/getDashboardInvitations';
import deleteDashboardInvitation from 'src/apis/deleteDashboardInvitation';

export const usePagenationDashboardInvitations = () => {
  const [allPage, setAllPage] = useState(1);
  const [nowPage, setNowPage] = useState(1);
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const queryClient = useQueryClient();
  const { boardId } = useParams<Params>();

  const { data, isLoading } = useQuery({
    queryKey: ['invitations', boardId, nowPage],
    queryFn: () => getDashboardInvitations(boardId, nowPage)
  });

  const { mutate, isPending } = useMutation({
    mutationFn: ({ invitationId }: { invitationId: number }) =>
      deleteDashboardInvitation(boardId, invitationId),

    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ['invitations', boardId]
      });
    }
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

  const handleDeleteButtonClick = (invitationId: number) => {
    if (isPending) {
      return;
    }
    mutate({ invitationId });
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
