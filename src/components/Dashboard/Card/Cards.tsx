import { ColumnData } from 'src/types/columnTypes';
import useInfiniteScrollCards from 'src/hooks/useInfiniteScrollColumn';
import Card from './Card';
import AddCard from './AddCard';

interface Props {
  columnInfo: ColumnData;
}

export default function Cards({ columnInfo }: Props) {
  const { cardList } = useInfiniteScrollCards(columnInfo);

  const renderCard = (card: any) => {
    if (card?.columnId !== columnInfo?.id) return null;
    return <Card key={card.id} cardData={card} columnInfo={columnInfo} />;
  };

  const renderCardsFromPage = (page: any) => page?.cards?.map(renderCard) ?? [];

  return (
    <section className="flex flex-col gap-[1rem] tablet:gap-[1.6rem]">
      <AddCard columnInfo={columnInfo} />
      {cardList?.pages?.map(renderCardsFromPage)}
    </section>
  );
}
