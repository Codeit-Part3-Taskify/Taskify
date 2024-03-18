import { ColumnData } from 'src/types/columnTypes';
import Cards from '../Card/Cards';
import ColumnInfo from './ColumnInfo';

interface Props {
  columnInfo: ColumnData;
}
export default function Column({ columnInfo }: Props) {
  return (
    <section className="p-[2rem] w-[35.4rem] border-r border-r-[#EEEEEE] flex-shrink-0">
      <ColumnInfo columnInfo={columnInfo} />
      <Cards columnInfo={columnInfo} />
    </section>
  );
}
