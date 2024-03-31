import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import readColumnList from 'src/apis/readColumnList';
import AddColumn from 'src/components/Dashboard/Column/AddColumn';
import Column from 'src/components/Dashboard/Column/Column';
import { ColumnData } from 'src/types/columnTypes';
import { useEffect, useRef, useState } from 'react';
import backwardArrow from 'src/assets/images/left-arrow.png';
import forwardArrow from 'src/assets/images/right-arrow.png';
import useSwipe from 'src/hooks/useSwipe';

export default function Dashboard() {
  const { boardId } = useParams();
  const { data } = useQuery({
    queryKey: ['readColumnList', boardId],
    queryFn: () => readColumnList(boardId as string)
  });

  const { scroll, scrollContainerRef, showLeftButton, showRightButton } =
    useSwipe(data);

  return (
    <main className="flex flex-col desktop:h-full desktop:flex-row">
      <Helmet>
        <title>Taskify 대시보드</title>
      </Helmet>

      {showLeftButton && (
        <button
          onClick={() => scroll('left')}
          className="w-[4rem] h-full absolute desktop:left-[30rem] tablet:left-[16rem] left-[6.7rem] bg-transparent hover:bg-violet_8 opacity-50"
        >
          <img src={backwardArrow} alt="왼쪽 화살표 아이콘" />
        </button>
      )}

      <div ref={scrollContainerRef} className="flex overflow-auto">
        {data?.data?.map((column: ColumnData) => (
          <Column key={column.id} columnInfo={column} />
        ))}
        <AddColumn />
      </div>

      {showRightButton && (
        <button
          onClick={() => scroll('right')}
          className="w-[4rem] h-full bg-transparent absolute right-0 hover:bg-violet_8 opacity-50"
        >
          <img src={forwardArrow} alt="오른쪽 화살표 아이콘" />
        </button>
      )}
    </main>
  );
}
