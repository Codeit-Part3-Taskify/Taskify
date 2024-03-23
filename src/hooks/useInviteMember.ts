import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useSetAtom } from 'jotai';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Params, useParams } from 'react-router-dom';
import getDashboardInvitations from 'src/apis/getDashboardInvitations';
import postDashboardInvitations from 'src/apis/postDashboardInvitation';
import { modalAtom } from 'src/store/store';

export default function useInviteMember() {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const { boardId } = useParams<Params>();
  const queryClient = useQueryClient();
  const setModal = useSetAtom(modalAtom);

  const { data, isLoading } = useQuery({
    queryKey: ['invitations', boardId],
    queryFn: () => getDashboardInvitations(boardId)
  });

  const { mutate, isPending } = useMutation({
    mutationFn: ({ email }: { email: string }) =>
      postDashboardInvitations(boardId, email),

    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ['invitations', boardId]
      });
      setModal(prev => ({
        ...prev,
        name: 'inviteMember',
        status: false
      }));
    },

    onError: error => {
      console.log(error);
      if (axios.isAxiosError(error)) {
        setErrorMessage(error?.response?.data.message);
      }
    }
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isPending || isLoading) {
      return;
    }

    if (
      data?.invitations.some(
        invitation => invitation.invitee.email === inputValue
      )
    ) {
      setErrorMessage('이미 초대 요청을 보낸 유저입니다.');
      return;
    }
    setErrorMessage('');

    mutate({ email: inputValue });
  };

  return { handleInputChange, handleFormSubmit, errorMessage };
}
