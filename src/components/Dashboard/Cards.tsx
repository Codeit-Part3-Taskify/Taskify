import type { CardData } from 'src/types/cardType';
import useCardList from 'src/hooks/useCardList';
import Card from './Card';
import AddCard from './AddCard';

export default function Cards() {
  const cardList = useCardList();
  return (
    <section className="flex flex-col gap-[1.6rem]">
      <AddCard />
      {cardList &&
        cardList.map((card: CardData) => (
          <Card key={card.id} cardData={card} />
        ))}
    </section>
  );
}
