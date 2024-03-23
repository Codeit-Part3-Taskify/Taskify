import { modalAtom } from 'src/store/store';
import { useAtom } from 'jotai';
import stroke from 'src/assets/images/stroke.svg';
import kebab from 'src/assets/images/kebab.svg';
import closeBtn from 'src/assets/images/close.svg';
import { useQuery } from '@tanstack/react-query';
import type { CardData } from 'src/types/cardTypes';
import readCardDetail from 'src/apis/readCardDetail';
import Profile from 'src/components/Profile/Profile';
import { useState } from 'react';
import DropDown from './DropDown';
import CommentBox from './CommentBox';

export default function CardDetail() {
  const [modal, setModal] = useAtom(modalAtom);
  const { data: cardInformation } = useQuery<CardData>({
    queryKey: ['readCardDetail', modal.cardId],
    queryFn: async () => readCardDetail(modal.cardId)
  });
  const [isDropDownClicked, setIsDropDownClicked] = useState(false);
  return (
    <div className="w-[67.4rem] h-[70.3rem]">
      <div className="flex justify-between mb-[2.4rem]">
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
            onClick={() => setModal(prev => ({ ...prev, status: false }))}
          >
            <img
              src={closeBtn}
              alt="닫기버튼"
              className="w-[3.2rem] h-[3.2rem]"
            />
          </button>
        </div>
      </div>
      <div className="flex gap-[2.4rem]">
        <div>
          <div className="flex gap-[2rem]">
            <span className="text-[1.2rem]">{modal.columnTitle}</span>
            <img src={stroke} alt="세로줄" />
            <ul className="flex gap-[0.6rem]">
              {cardInformation?.tags.map(tag => (
                <li key={tag} className="text-[1.2rem]">
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-[1.4rem] leading-[2.4rem] w-[45rem] h-[6.4rem] my-[1.6rem]">
            {cardInformation?.description}
          </div>

          <div>
            <img
              src={cardInformation?.imageUrl}
              alt="카드이미지"
              className="h-[26.2rem] w-[45rem] mb-[2.4rem] rounded-[0.6rem]"
            />
          </div>
          {cardInformation && <CommentBox cardInformation={cardInformation} />}
        </div>
        <div className="w-[20rem] h-[15.5rem] border border-[#D9D9D9] rounded-[0.8rem] p-[1.6rem] flex flex-col items-start">
          <span className="mb-[0.6rem] text-[#000] text-[1.2rem] font-semibold">
            담당자
          </span>
          <Profile
            size="smallSize"
            profileImgSrc={cardInformation?.assignee.profileImageUrl}
            userName={cardInformation?.assignee.nickname}
          />
          <span className="mt-[2rem] text-[#000] text-[1.2rem] font-semibold">
            마감일
          </span>
          <span className="text-[#333236] text-[1.4rem]">
            {cardInformation?.dueDate &&
              cardInformation?.dueDate.replaceAll('-', '.')}
          </span>
        </div>
      </div>
    </div>
  );
}
