import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQueryClient, useQuery } from '@tanstack/react-query';
import { modalAtom } from 'src/store/store';
import { useAtom } from 'jotai';
import { getMemberList } from 'src/apis/getMemberList';

export default function useCardCommon() {
  const [modal, setModal] = useAtom(modalAtom);
  const { boardId } = useParams();
  const queryClient = useQueryClient();

  const { data: memberListQeury } = useQuery({
    queryKey: ['memberList', boardId],
    queryFn: () => getMemberList(boardId as string)
  });

  return {
    modal,
    setModal,
    boardId,
    queryClient,
    memberListQeury
  };
}
