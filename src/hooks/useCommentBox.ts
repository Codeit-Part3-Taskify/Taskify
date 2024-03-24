import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient
} from '@tanstack/react-query';
import { useCallback, useRef } from 'react';
import { useForm } from 'react-hook-form';
import deleteComment from 'src/apis/deleteComment';
import postComment from 'src/apis/postComment';
import readCommentList from 'src/apis/readCommentList';
import { CardData } from 'src/types/cardTypes';
import { CommentBody, PostComment } from 'src/types/commentTypes';

export default function useCommentBox(cardInformation: CardData) {
  const queryClient = useQueryClient();
  const commentContainer = useRef<HTMLDivElement>(null);

  // 무한스크롤
  const {
    data: commentList,
    fetchNextPage,
    hasNextPage,
    isLoading
  } = useInfiniteQuery({
    queryKey: ['readCommentList', cardInformation.id],
    queryFn: ({ pageParam }) => readCommentList(cardInformation.id, pageParam),
    initialPageParam: 0,
    getNextPageParam: lastPage => lastPage.cursorId
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

  const handleScroll = useCallback(() => {
    const container = commentContainer.current;
    if (container) {
      const { scrollHeight, scrollTop, clientHeight } = container;

      const scrollBottom = scrollHeight - scrollTop - clientHeight;
      if (scrollBottom < 200 && hasNextPage) {
        fetchNextPage();
      }
    }
  }, [commentContainer, fetchNextPage, hasNextPage]);
  return {
    handleSubmit,
    submit,
    register,
    deleteClick,
    commentList,
    fetchNextPage,
    commentContainer,
    handleScroll,
    isLoading
  };
}
