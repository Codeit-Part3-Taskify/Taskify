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

export default function Dashboard() {
  const { boardId } = useParams();
  const { data } = useQuery({
    queryKey: ['readColumnList', boardId],
    queryFn: () => readColumnList(boardId as string)
  });
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  useEffect(() => {
    const checkScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } =
          scrollContainerRef.current;
        setShowLeftButton(scrollLeft > 0);
        setShowRightButton(scrollLeft < scrollWidth - clientWidth);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    scrollContainer?.addEventListener('scroll', checkScroll);
    checkScroll();

    return () => {
      scrollContainer?.removeEventListener('scroll', checkScroll);
    };
  }, [data]);

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
    <main className="flex flex-col desktop:h-full desktop:flex-row">
      <Helmet>
        <title>Taskify 대시보드</title>
      </Helmet>
      {data?.data?.map((column: ColumnData) => (
        <Column key={column.id} columnInfo={column} />
      ))}
      <AddColumn />
    </main>
  );
}
