import { FormEvent, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import getMyInvitations from 'src/apis/getMyInvitations';

export default function useMyInvations() {
  const [resultValue, setResultValue] = useState('');
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (value: string) => getMyInvitations(value),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['myInvitations']
      });
    }
  });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchValue = formData.get('search') as string;

    setResultValue(searchValue);
    mutate(searchValue);
  };

  const { data, isError } = useQuery({
    queryKey: ['myInvitations', resultValue || 'myInvitations'],
    queryFn: () => {
      if (resultValue) {
        return getMyInvitations(resultValue);
      }
      return getMyInvitations();
    }
  });

  if (isError) alert('내 초대내역을 불러오지 못했습니다.');

  return { data, onSubmit };
}
