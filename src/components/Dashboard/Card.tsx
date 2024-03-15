import calendar from 'src/assets/images/calendar.svg';
import type { CardData } from 'src/types/cardType';

interface Prop {
  cardData: CardData;
}

export default function Card({ cardData }: Prop) {
  return (
    <section className="p-[2rem] bg-white border border-solid border-[#D9D9D9] rounded-[0.6rem] cursor-pointer">
      <h2 className="text-[1.6rem] font-medium text-[#333236] mb-[1rem]">
        {cardData?.title}
      </h2>
      <div className="flex gap-[0.6rem] mb-[1.5rem]">
        {cardData?.tags.map(tag => (
          <span className="rounded-[0.4rem] text-orange-600 text-orange text-[1.2rem]">
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
