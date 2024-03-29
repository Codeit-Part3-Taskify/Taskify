import { CardData } from 'src/types/cardTypes';
import useCommentBox from 'src/hooks/useCommentBox';
import CommentList from './CommentList';

export default function CommentBox({
  cardInformation
}: {
  cardInformation: CardData;
}) {
  const {
    handleSubmit,
    commentContainer,
    handleScroll,
    submit,
    register,
    commentList,
    deleteClick,
    isLoading,
    errors
  } = useCommentBox(cardInformation);

  const renderComment = (comment: any) => (
    <CommentList key={comment.id} comment={comment} deleteClick={deleteClick} />
  );

  // 페이지 내의 모든 댓글을 렌더링하는 함수
  const renderCommentsFromPage = (page: any) =>
    page?.comments?.map(renderComment);

  if (isLoading) {
    return <div>loading중...</div>;
  }
  return (
    <div>
      <div className="flex items-center justify-center">
        <p className="absolute text-red-500 text-[1.2rem]">
          {errors.content?.message}
        </p>
      </div>
      <form
        className="relative w-[100%] tablet:w-[45rem] h-[14rem] flex gap-[1rem] flex-col mb-[2rem]"
        onSubmit={handleSubmit(submit)}
      >
        <label htmlFor="content" className="text-[1.6rem] font-medium">
          댓글
        </label>
        <textarea
          id="content"
          className="p-[1.6rem] text-[1.4rem] w-[28.7rem] tablet:w-[45rem] h-[11rem] placeholder:text-[#9FA6B2] resize-none border border-solid-[#D9D9D9] rounded-[0.6rem] outline-none"
          placeholder="댓글 작성하기"
          {...register('content', {
            required: { value: true, message: '내용을 입력해 주세요.' }
          })}
        />
        <button className="absolute bottom-[1.2rem] right-[1.2rem] text-[1.2rem] font-medium text-[#5534DA] border border-solid-[#D9D9D9] rounded-[0.4rem] py-[0.9rem] px-[3.1rem]">
          입력
        </button>
      </form>
      <div
        ref={commentContainer}
        onScroll={handleScroll}
        className="w-[28.7rem] tablet:w-[45rem] h-[8.5rem] overflow-auto scroll"
      >
        {commentList?.pages?.map(renderCommentsFromPage)}
      </div>
    </div>
  );
}
