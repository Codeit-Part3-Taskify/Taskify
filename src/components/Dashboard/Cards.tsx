import type { CardData } from 'src/types/cardType';
import { useAtom } from 'jotai';
import { cardListAtom } from 'src/store/store';
import Card from './Card';
import AddCard from './AddCard';

export default function Cards() {
  const [{ data }] = useAtom(cardListAtom);
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
