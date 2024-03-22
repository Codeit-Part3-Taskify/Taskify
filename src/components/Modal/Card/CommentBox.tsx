import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { BaseSyntheticEvent } from 'react';
import { useForm } from 'react-hook-form';
import deleteComment from 'src/apis/deleteComment';
import postComment from 'src/apis/postComment';
import readCommentList from 'src/apis/readCommentList';
import Profile from 'src/components/Profile/Profile';
import { CardData } from 'src/types/cardTypes';
import { CommentBody, PostComment } from 'src/types/commentTypes';

export default function CommentBox({
  cardInformation
}: {
  cardInformation: CardData;
}) {
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
    console.log(commentId);
    deleteCommentMutate({ commentId });
  };
  const { register, handleSubmit, setValue } = useForm<{ content: string }>();
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
  return (
    <div>
      <form
        className="relative w-[45rem] h-[14rem] flex gap-[1rem] flex-col mb-[2rem]"
        onSubmit={handleSubmit(submit)}
      >
        <label htmlFor="content" className="text-[1.6rem] font-medium">
          댓글
        </label>
        <textarea
          id="content"
          className="p-[1.6rem] text-[1.4rem] w-[45rem] h-[11rem] placeholder:text-[#9FA6B2] resize-none border border-solid-[#D9D9D9] rounded-[0.6rem] outline-none"
          placeholder="댓글 작성하기"
          {...register('content')}
        />
        <button className="absolute bottom-[1.2rem] right-[1.2rem] text-[1.2rem] font-medium text-[#5534DA] border border-solid-[#D9D9D9] rounded-[0.4rem] py-[0.9rem] px-[3.1rem]">
          입력
        </button>
      </form>
      <div className="w-[45rem] h-[8.5rem] overflow-y-scroll">
        {commentList?.comments.map(comment => (
          <div key={comment.id}>
            <div className="flex items-center gap-[0.8rem]">
              <span className="flex justify-start">
                <Profile
                  size="smallSize"
                  profileImgSrc={comment.author.profileImageUrl}
                  userName={comment.author.nickname}
                />
              </span>
              <span>
                {comment.createdAt
                  .slice(0, 16)
                  .replace('T', ' ')
                  .replaceAll('-', '.')}
              </span>
            </div>
            <div className="ml-[4.4rem] flex flex-col gap-[1.2rem]">
              <p className="text-[1.4rem]">{comment.content}</p>
              <div className="flex gap-[1.2rem]">
                <button className="text-[1.2rem] text-[#9FA6B2] underline">
                  수정
                </button>
                <button
                  onClick={() => deleteClick(comment.id)}
                  className="text-[1.2rem] text-[#9FA6B2] underline"
                >
                  삭제
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
