import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import deleteComment from 'src/apis/deleteComment';
import postComment from 'src/apis/postComment';
import readCommentList from 'src/apis/readCommentList';
import { CardData } from 'src/types/cardTypes';
import { CommentBody, PostComment } from 'src/types/commentTypes';

export default function useCommentBox(cardInformation: CardData) {
  const queryClient = useQueryClient();
  const { data: commentList } = useQuery<PostComment>({
    queryKey: ['readCommentList', cardInformation.id],
    queryFn: () => readCommentList(cardInformation.id)
  });

  const { mutate: createCommentMutate } = useMutation<void, Error, CommentBody>(
    {
      mutationFn: body => postComment(body),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['readCommentList'] });
      }
    }
  );

  const { mutate: deleteCommentMutate } = useMutation<
    void,
    Error,
    { commentId: number }
  >({
    mutationFn: ({ commentId }) => deleteComment(commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['readCommentList'] });
    }
  });

  const deleteClick = (commentId: number) => {
    deleteCommentMutate({ commentId });
  };

  const { register, handleSubmit, setValue } = useForm<{
    content: string;
    comment: number;
  }>();

  const submit = (data: { content: string }) => {
    const body = {
      ...data,
      cardId: cardInformation.id,
      columnId: cardInformation.columnId,
      dashboardId: cardInformation.dashboardId
    };
    createCommentMutate(body);
    setValue('content', '');
  };

  return { handleSubmit, submit, register, commentList, deleteClick };
}
