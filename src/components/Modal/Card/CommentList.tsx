import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import updateComment from 'src/apis/updateComment';
import Profile from 'src/components/Profile/Profile';
import { CommentData } from 'src/types/commentTypes';

export default function CommentList({
  comment,
  deleteClick
}: {
  comment: CommentData;
  deleteClick: (commentId: number) => void;
}) {
  const queryClient = useQueryClient();
  const [isEditing, setIsEditing] = useState(false);
  const [commentValue, setCommentValue] = useState(comment.content);

  const { mutate: updateCommentMutate } = useMutation<
    void,
    Error,
    { commentId: number; content: string }
  >({
    mutationFn: ({ commentId, content }) => updateComment(commentId, content),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['readCommentList'] });
    }
  });

  const handleUpdateComment = (commentId: number, value: string) => {
    updateCommentMutate({ commentId, content: value });
  };
  return (
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
        <div>
          {isEditing ? (
            <input
              value={commentValue}
              onChange={e => setCommentValue(e.target.value)}
            />
          ) : (
            <p className="text-[1.4rem]">{comment.content}</p>
          )}
        </div>
        <div className="flex gap-[1.2rem]">
          <button
            className="text-[1.2rem] text-[#9FA6B2] underline"
            onClick={() => {
              if (isEditing) {
                handleUpdateComment(comment.id, commentValue);
              }
              setIsEditing(!isEditing);
            }}
          >
            {isEditing ? '완료' : '수정'}
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
  );
}
