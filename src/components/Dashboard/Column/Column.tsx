import { ColumnData } from 'src/types/columnTypes';
import useInfiniteScrollCards from 'src/hooks/useInfiniteScrollColumn';
import Cards from '../Card/Cards';
import ColumnInfo from './ColumnInfo';

interface Props {
  columnInfo: ColumnData;
}
export default function Column({ columnInfo }: Props) {
  const { cardContainer, handleScroll } = useInfiniteScrollCards(columnInfo);

  return (
    <section
      className="p-[1.2rem] border-r border-b  w-[calc(100vw-16rem)] tablet:p-[2rem] desktop:w-[35.4rem] shrink-0 h-screen overflow-y-scroll"
      ref={cardContainer}
      onScroll={handleScroll}
    >
      <ColumnInfo columnInfo={columnInfo} />
      <Cards columnInfo={columnInfo} />
    </section>
  );
}
