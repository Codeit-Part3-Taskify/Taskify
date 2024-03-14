import calendar from '../../assets/images/calendar.svg';

export default function Card() {
  return (
    <section className="p-[2rem] bg-white border border-solid border-[#D9D9D9] rounded-[0.6rem] cursor-pointer">
      <h2 className="text-[1.6rem] font-medium text-[#333236] mb-[1rem]">
        새로운 일정 관리 Taskify
      </h2>
      <div className="flex gap-[0.6rem] mb-[1.5rem]">
        <span className="rounded-[0.4rem] text-orange-600 text-orange text-[1.2rem]">
          프로젝트
        </span>
        <span className="rounded-[0.4rem] text-red-600 text-pink text-[1.2rem]">
          백엔드
        </span>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-[0.6rem]">
          <img
            src={calendar}
            alt="달력이미지"
            className="w-[1.8rem] h-[1.8rem]"
          />
          <span className="text-[1.2rem] text-[#787486] font-medium">
            2022.12.31
          </span>
        </div>
        <span className="bg-green rounded-[99rem] flex items-center justify-center text-white h-[2rem] w-[2rem]">
          B
        </span>
      </div>
    </section>
  );
}
