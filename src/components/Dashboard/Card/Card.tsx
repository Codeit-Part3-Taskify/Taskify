import { useSetAtom } from 'jotai';
import calendar from 'src/assets/images/calendar.svg';
import type { CardData } from 'src/types/cardTypes';
import { modalAtom } from 'src/store/store';
import { ColumnData } from 'src/types/columnTypes';

interface Prop {
  cardData: CardData;
  columnInfo: ColumnData;
}

const tagsColor = [
  'text-orange-400 bg-rose-100',
  'text-lime-400 bg-lime-100',
  'text-pink-500 bg-pink-100',
  'text-blue-500 bg-blue-100'
];

export default function Card({ cardData, columnInfo }: Prop) {
  const setModal = useSetAtom(modalAtom);
  return (
    <button
      className="p-[1.2rem] bg-white border border-solid border-[#D9D9D9] rounded-[0.6rem] cursor-pointer tablet:flex tablet:gap-[2rem] tablet:p-[2rem] desktop:flex-col desktop:gap-[1.2rem] w-full"
      onClick={() =>
        setModal(prev => ({
          ...prev,
          name: 'cardDetail',
          status: true,
          cardId: cardData.id,
          columnId: cardData.columnId,
          columnTitle: columnInfo.title
        }))
      }
    >
      {cardData?.imageUrl && (
        <div className="flex justify-center">
          <img
            src={cardData?.imageUrl}
            alt="이미지"
            className="object-contain w-[26rem] h-[15rem] mb-[1rem] rounded-[0.6rem] tablet:w-[9.1rem] tablet:h-[6.3rem] tablet:m-0 desktop:w-[27.4rem] desktop:h-[16rem]"
          />
        </div>
      )}
      <div className="flex flex-col gap-[0.6rem] tablet:grid tablet:grid-rows-2 tablet:w-[100%] desktop:flex">
        <h2 className="text-[1.4rem] font-medium text-[#333236] text-left tablet:text-[1.6rem]">
          {cardData?.title}
        </h2>
        <div className="flex gap-[0.6rem] tablet:row-start-2 tablet:flex-1">
          {cardData?.tags.map(tag => (
            <span
              key={tag}
              className={`rounded-[0.4rem] text-[1rem] px-[0.6rem] py-[0.4rem] tablet:text-[1.2rem] ${
                tagsColor[tag.length % 4]
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        <div
          className={`flex items-center ${
            cardData.dueDate ? 'justify-between' : 'justify-end'
          } tablet:row-start-2 table:flex-2`}
        >
          {cardData.dueDate && (
            <div className="flex gap-[0.6rem]">
              <img
                src={calendar}
                alt="달력이미지"
                className="w-[1.4rem] h-[1.4rem]"
              />
              <span className="text-[1rem] text-[#787486] font-medium tablet:text-[1.2rem]">
                {cardData.dueDate && cardData.dueDate.slice(0, 10)}
              </span>
            </div>
          )}
          <span className="bg-[#A3C4A2] rounded-[99rem] flex items-center justify-center text-white h-[2.2rem] w-[2.2rem] tablet:text-[1.2rem]">
            {cardData?.assignee?.nickname[0]}
          </span>
        </div>
      </div>
    </button>
  );
}
