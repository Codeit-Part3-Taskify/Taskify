import { useMutation, useQueryClient } from '@tanstack/react-query';
import putInvitations from 'src/apis/putInvitations';

export default function usePutMyInvations(
  invitationId: number,
  inviteAccepted: boolean
) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: () => putInvitations(invitationId, inviteAccepted),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['myInvitations']
      });
    }
  });

  const putMyInvations = () => {
    mutate();
  };

  return putMyInvations;
}
