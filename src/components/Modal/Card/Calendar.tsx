import {
  BaseSyntheticEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState
} from 'react';
import getCalendar from 'src/utils/getCalendar';
import nextMonth from 'src/utils/getNextMonth';
import prevMonth from 'src/utils/getPrevMonth';

const DAY = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export default function Calendar({
  setCalendarState,
  setValue
}: {
  setCalendarState: Dispatch<SetStateAction<boolean>>;
  setValue: any;
}) {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dateList, setDateList] = useState(getCalendar(currentDate));

  const handleClick = (e: BaseSyntheticEvent) => {
    const target = e.target.textContent;
    let month = (currentDate.getMonth() + 1).toString();
    let targetDate = target;
    if (target.length > 0 && target.length < 3) {
      if ((currentDate.getMonth() + 1).toString().length === 1) {
        month = `0${currentDate.getMonth() + 1}`;
      }
      if (target.length === 1) {
        targetDate = `0${target}`;
      }
      const formDate = `${currentDate.getFullYear()}-${month}-${targetDate}`;
      setValue('dueDate', `${formDate} 00:00`);
      setCalendarState(false);
    }
  };
  useEffect(() => {
    setDateList(getCalendar(currentDate));
  }, [currentDate]);

  return (
    <main className="absolute right-1 z-10 max-w-[960px] mx-auto bg-purple-50 p-[1rem] rounded-lg shadow-lg">
      <section className="flex items-center justify-between mx-4 my-4 text-gray-700">
        <button
          className="flex justify-center text-3xl cursor-pointer "
          onClick={() => setCurrentDate(new Date())}
        >
          {currentDate.getFullYear()}
        </button>
        <span className="text-4xl">{currentDate.getMonth() + 1}</span>
        <div className="flex gap-4 text-2xl outline-none">
          <button onClick={() => prevMonth(currentDate, setCurrentDate)}>
            {'<'}
          </button>
          <button onClick={() => nextMonth(currentDate, setCurrentDate)}>
            {'>'}
          </button>
        </div>
      </section>
      <button onClick={handleClick} type="button">
        <div className="grid grid-cols-7 gap-2 text-center grid-flow-dense">
          {DAY.map(day => (
            <span className=" text-xl mb-[-6px]">{day}</span>
          ))}
          {dateList.map((date, index) =>
            !date ? (
              <span className="border-t border-t-slate-400" />
            ) : (
              <span
                key={date}
                className={`
              pb-12
              border-t border-t-slate-400
              hover:bg-gray-700
              hover:text-white
              transition-colors
              ease-in-out
              duration-300
              text-xl
              text-left
              cursor-pointer
              ${!(index % 7) && 'text-red-700'}
              ${index % 7 === 6 && 'text-blue-700'}
              ${
                today.getDate() === date &&
                today.getMonth() === currentDate.getMonth() &&
                today.getFullYear() === currentDate.getFullYear()
                  ? 'text-green-500'
                  : ''
              }
              `}
              >
                {date}
              </span>
            )
          )}
        </div>
      </button>
    </main>
  );
}
