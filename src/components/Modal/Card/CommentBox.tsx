import { CardData } from 'src/types/cardTypes';
import useCommentBox from 'src/hooks/useCommentBox';
import CommentList from './CommentList';

export default function CommentBox({
  cardInformation
}: {
  cardInformation: CardData;
}) {
  const { handleSubmit, submit, register, commentList, deleteClick } =
    useCommentBox(cardInformation);
  console.log(commentList);
  return (
    <div>
      {commentList && (
        <>
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
              <CommentList
                key={comment.id}
                comment={comment}
                deleteClick={deleteClick}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
