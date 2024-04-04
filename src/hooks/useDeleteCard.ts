import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCard } from 'src/apis/deleteCard';

export default function useDeleteCard() {
  const queryClient = useQueryClient();
  const { mutate: deleteCardMutate } = useMutation<void, Error, number>({
    mutationFn: cardId => deleteCard(cardId),
    onSuccess: () => {
      queryClient.invalidateQueries();
    }
  });
  return deleteCardMutate;
}
