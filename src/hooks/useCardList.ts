import { useState, useEffect } from 'react';
import readCardList from 'src/apis/readCardList';
import { CardData } from 'src/types/cardType';

export default function useCardList() {
  const [cardList, setCardList] = useState<CardData[] | null>(null);

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const { cards }: { cards: CardData[] } = await readCardList();
        setCardList(cards);
      } catch (e) {
        if (e instanceof Error) {
          console.error(e.message);
          alert('카드를 불러오는데 실패하였습니다.');
        }
      }
    };
    fetchCard();
  }, []);
  return cardList;
}
