import type { CardData } from 'src/types/cardType';
import useCardList from 'src/hooks/useCardList';
import AddCard from './AddCard';
import Card from './Card';

export default function Cards() {
  const { data } = useCardList();

  return (
    <section className="flex flex-col gap-[1.6rem]">
      <AddCard />
      {data?.cards &&
        data?.cards.map((card: CardData) => (
          <Card key={card.id} cardData={card} />
        ))}
    </section>
  );
}
