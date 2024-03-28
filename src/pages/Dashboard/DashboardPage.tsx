import { useParams } from 'react-router-dom';
import readColumnList from 'src/apis/readColumnList';
import Column from 'src/components/Dashboard/Column/Column';
import AddColumn from 'src/components/Dashboard/Column/AddColumn';
import { useQuery } from '@tanstack/react-query';
import { ColumnData } from 'src/types/columnTypes';
import { useRef } from 'react';
import backwardArrow from 'src/assets/images/left-arrow.png';
import forwardArrow from 'src/assets/images/right-arrow.png';

export default function Dashboard() {
  const { boardId } = useParams();
  const { data } = useQuery({
    queryKey: ['readColumnList', boardId],
    queryFn: () => readColumnList(boardId as string)
  });
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: any) => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 500;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <main className="relative flex flex-col desktop:h-full desktop:flex-row">
      <button
        onClick={() => scroll('left')}
        className="hover:bg-violet_8 w-[5rem] h-full bg-transparent absolute left-0"
      >
        <img src={backwardArrow} alt="왼쪽 화살표 아이콘" />
      </button>
      <div ref={scrollContainerRef} className="flex overflow-auto">
        {data?.data?.map((column: ColumnData) => (
          <Column key={column.id} columnInfo={column} />
        ))}
        <AddColumn />
      </div>
      <button
        onClick={() => scroll('right')}
        className="hover:bg-violet_8 w-[5rem] h-full bg-transparent absolute right-0"
      >
        <img src={forwardArrow} alt="오른쪽 화살표 아이콘" />
      </button>
    </main>
  );
}
