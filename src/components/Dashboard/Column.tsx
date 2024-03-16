import Cards from './Cards';
import ColumnInfo from './ColumnInfo';

export default function Column({ columnInfo }: any) {
  return (
    <section className="p-[2rem] w-[35.4rem] border-r border-r-[#EEEEEE] flex-shrink-0">
      <ColumnInfo columnInfo={columnInfo} />
      <Cards />
    </section>
  );
}
