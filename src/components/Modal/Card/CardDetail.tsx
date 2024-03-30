import { modalAtom } from 'src/store/store';
import { useAtom } from 'jotai';
import stroke from 'src/assets/images/stroke.svg';
import kebab from 'src/assets/images/kebab.svg';
import purpleCircle from 'src/assets/images/purple-circle.svg';
import logo from 'src/assets/images/logo.svg';
import closeBtn from 'src/assets/images/close.svg';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import type { CardData } from 'src/types/cardTypes';
import readCardDetail from 'src/apis/readCardDetail';
import Profile from 'src/components/Profile/Profile';
import { useState } from 'react';
import DropDown from './DropDown';
import CommentBox from './CommentBox';

const tagsColor = [
  'text-orange-400 bg-rose-100',
  'text-lime-400 bg-lime-100',
  'text-pink-500 bg-pink-100',
  'text-blue-500 bg-blue-100'
];

export default function CardDetail() {
  const queryClient = useQueryClient();
  const [modal, setModal] = useAtom(modalAtom);
  const { data: cardInformation, isLoading } = useQuery<CardData>({
    queryKey: ['readCardDetail', modal.cardId],
    queryFn: async () => readCardDetail(modal.cardId)
  });
  const [isDropDownClicked, setIsDropDownClicked] = useState(false);

  const resetCommentList = () =>
    queryClient.resetQueries({
      queryKey: ['readCommentList']
    });

  if (isLoading) {
    return <div>loading중...</div>;
  }

  return (
    <div className="relative flex flex-col gap-[1.6rem] tablet:gap-[2.4rem]">
      <div className="flex justify-between">
        <span className="text-[#333236] text-[2.4rem] font-bold">
          {cardInformation?.title}
        </span>
        <div className="flex gap-[2.4rem]">
          <button
            className="relative"
            type="button"
            onClick={() => setIsDropDownClicked(prev => !prev)}
          >
            {isDropDownClicked && <DropDown />}
            <img src={kebab} alt="케밥버튼" className="w-[2.8rem] h-[2.8rem]" />
          </button>
          <button
            type="button"
            onClick={() => {
              resetCommentList();
              setModal(prev => ({ ...prev, status: false }));
            }}
          >
            <img
              src={closeBtn}
              alt="닫기버튼"
              className="w-[3.2rem] h-[3.2rem]"
            />
          </button>
        </div>
      </div>
      <div className="flex flex-col-reverse tablet:flex-row gap-[2.4rem]">
        <div>
          <div className="flex gap-[2.8rem] items-center">
            <div className="px-[0.8rem] py-[0.4rem] bg-[#F1EFFD] flex gap-[0.6rem] items-center rounded-[1.1rem]">
              <img
                src={purpleCircle}
                alt="보라색 원 이미지"
                className="w-[0.6rem] h-[0.6rem]"
              />
              <span className="text-[1.2rem] text-[#5534DA]">
                {modal.columnTitle}
              </span>
            </div>
            <img src={stroke} alt="세로줄" />
            <ul className="flex gap-[0.6rem]">
              {cardInformation?.tags.map(tag => (
                <li
                  key={tag}
                  className={`rounded-[0.4rem] text-[1rem] px-[0.6rem] py-[0.4rem] tablet:text-[1.2rem] ${tagsColor[tag.length % 4]}`}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-[1.4rem] leading-[2.4rem] my-[1.6rem]">
            {cardInformation?.description}
          </div>

          <div>
            {cardInformation?.imageUrl ? (
              <img
                src={cardInformation?.imageUrl}
                alt="카드 이미지"
                className="w-[28.7rem] h-[26.2rem] tablet:w-[45rem] mb-[2.4rem] rounded-[0.6rem]"
              />
            ) : (
              <div className="flex flex-col-reverse items-center">
                <img
                  src={logo}
                  alt="카드 이미지"
                  className="w-[10rem] h-[10rem] tablet:w-[45rem] mb-[2.4rem] rounded-[0.6rem]"
                />
                이미지가 없습니다.
              </div>
            )}
          </div>
          {cardInformation && <CommentBox cardInformation={cardInformation} />}
        </div>
        <div className="w-[28.7rem] tablet:w-[20rem] tablet:h-[15.5rem] border border-[#D9D9D9] rounded-[0.8rem] p-[1.6rem] items-start flex flex-row tablet:flex-col tablet:gap-[2rem]">
          <div className="flex flex-col items-start flex-1">
            <span className="mb-[0.6rem] text-[#000] text-[1.2rem] font-semibold">
              담당자
            </span>
            <Profile
              size="smallSize"
              border="none"
              profileImgSrc={cardInformation?.assignee?.profileImageUrl}
              userName={cardInformation?.assignee?.nickname}
            />
          </div>
          <div className="flex flex-col items-start justify-between gap-[0.6rem] flex-1">
            <span className="text-[#000] text-[1.2rem] font-semibold">
              마감일
            </span>
            <span className="text-[#333236] text-[1.4rem]">
              {cardInformation?.dueDate
                ? cardInformation?.dueDate.replaceAll('-', '.').slice(0, 10)
                : '미정'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
