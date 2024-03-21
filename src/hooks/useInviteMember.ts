import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';
import { ChangeEvent, useState } from 'react';
import { Params, useParams } from 'react-router-dom';
import postDashboardInvitations from 'src/apis/postDashboardInvitation';
import { modalAtom } from 'src/store/store';

export default function useInviteMember() {
  const [inputValue, setInputValue] = useState('');
  const { boardId } = useParams<Params>();
  const queryClient = useQueryClient();
  const setModal = useSetAtom(modalAtom);

  const { mutate, isPending } = useMutation({
    mutationFn: ({ email }: { email: string }) =>
      postDashboardInvitations(boardId, email),

    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ['invitations', boardId]
      });
    }
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = () => {
    if (isPending) {
      return;
    }
    mutate({ email: inputValue });
    setModal(prev => ({
      ...prev,
      name: 'inviteMember',
      status: false
    }));
  };

  return { handleInputChange, handleFormSubmit };
}
