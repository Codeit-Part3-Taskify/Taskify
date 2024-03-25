import { ColumnData } from 'src/types/columnTypes';
import Cards from '../Card/Cards';
import ColumnInfo from './ColumnInfo';

interface Props {
  columnInfo: ColumnData;
}
export default function Column({ columnInfo }: Props) {
  return (
    <section className="p-[1.2rem] border-r border-b border-r-[#EEEEEE] w-[calc(100vw-16rem)] tablet:p-[2rem] desktop:w-[35.4rem] shrink-0 min-w-[31rem] ">
      <ColumnInfo columnInfo={columnInfo} />
      <Cards columnInfo={columnInfo} />
    </section>
  );
}
