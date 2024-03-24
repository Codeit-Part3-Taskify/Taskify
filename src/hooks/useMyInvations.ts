import { useQuery } from '@tanstack/react-query';
import getMyInvitations from 'src/apis/getMyInvitations';

export default function useMyInvations() {
  const { data, isError } = useQuery({
    queryKey: ['myInvitations'],
    queryFn: () => getMyInvitations()
  });

  if (isError) alert('내 초대내역을 불러오지 못했습니다.');

  return data;
}
