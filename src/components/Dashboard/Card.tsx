import calendar from 'src/assets/images/calendar.svg';
import type { CardData } from 'src/types/cardType';

interface Prop {
  cardData: CardData;
}

const tagsColor = [
  'text-orange-400 bg-rose-100',
  'text-lime-400 bg-green-100',
  'text-pink-500 bg-green-100',
  'text-blue-500 bg-blue-100'
];
export default function Card({ cardData }: Prop) {
  return (
    <section className="p-[2rem] bg-white border border-solid border-[#D9D9D9] rounded-[0.6rem] cursor-pointer">
      <h2 className="text-[1.6rem] font-medium text-[#333236] mb-[1rem]">
        {cardData?.title}
      </h2>
      <div className="flex gap-[0.6rem] mb-[1.5rem]">
        {cardData?.tags.map((tag, index) => (
          <span
            key={tag}
            className={`rounded-[0.4rem] text-[1.2rem] px-[0.6rem] py-[0.2rem] ${tagsColor[index % 4]}`}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-between">
        <div className="flex gap-[0.6rem]">
          <img
            src={calendar}
            alt="달력이미지"
            className="w-[1.8rem] h-[1.8rem]"
          />
          <span className="text-[1.2rem] text-[#787486] font-medium">
            {cardData.dueDate.slice(0, 10)}
          </span>
        </div>
        <span className="bg-green rounded-[99rem] flex items-center justify-center text-white h-[2rem] w-[2rem]">
          {cardData.assignee.nickname[0]}
        </span>
      </div>
    </section>
  );
}
