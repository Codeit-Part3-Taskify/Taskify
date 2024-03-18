import type { CardData } from 'src/types/cardTypes';
import readCardList from 'src/apis/readCardList';
import { useQuery } from '@tanstack/react-query';
import { ColumnData } from 'src/types/columnTypes';
import Card from './Card';
import AddCard from './AddCard';

interface Props {
  columnInfo: ColumnData;
}

export default function Cards({ columnInfo }: Props) {
  const { data } = useQuery({
    queryKey: ['readCardList', columnInfo.id],
    queryFn: readCardList
  });

  return (
    <section className="flex flex-col gap-[1.6rem]">
      <AddCard />
      {data?.cards?.map(
        (card: CardData) =>
          card?.columnId === columnInfo?.id && (
            <Card key={card.id} cardData={card} />
          )
      )}
    </section>
  );
}
