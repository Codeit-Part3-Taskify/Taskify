import Cards from './Cards';
import ColumnInfo from './ColumnInfo';

export default function Column() {
  return (
    <section className="h-screen p-[2rem] w-[35.4rem] border border-t-[#EEEEEE] border-r-[#EEEEEE]">
      <ColumnInfo />
      <Cards />
    </section>
  );
}
