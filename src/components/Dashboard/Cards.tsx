import Card from './Card';
import AddCard from './AddCard';

export default function Cards() {
  return (
    <section className="flex flex-col gap-[1.6rem]">
      <AddCard />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
}
