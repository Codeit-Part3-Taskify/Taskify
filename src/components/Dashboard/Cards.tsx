import { useState, useEffect } from 'react';
import axiosInstance from 'src/apis/axios';
import { AxiosResponse } from 'axios';
import Card from './Card';
import AddCard from './AddCard';

const Authorization =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTI2NCwidGVhbUlkIjoiMy01IiwiaWF0IjoxNzEwNDkxNzU2LCJpc3MiOiJzcC10YXNraWZ5In0.ok4Qv3OQeQzq_R6wJf2upY44DE4wa2EIvf6e3ix7iMY';

interface Assignee {
  id: number;
  nickname: string;
  profileImageUrl: string | null;
}

export interface CardData {
  assignee: Assignee;
  columnId: number;
  createdAt: string;
  dashboardId: number;
  description: string;
  dueDate: string;
  id: number;
  imageUrl: string | null;
  tags: string[];
  teamId: string;
  title: string;
  updatedAt: string;
}

async function readColumn() {
  const result: AxiosResponse = await axiosInstance
    .get('cards?columnId=16331', { headers: { Authorization } })
    .then(res => res);
  return result.data;
}

export default function Cards() {
  const [cardList, setCardList] = useState<CardData[]>([]);
  const handleLoad = async () => {
    const { cards }: { cards: CardData[] } = await readColumn();
    setCardList(cards);
  };

  useEffect(() => {
    handleLoad();
  }, []);
  return (
    <section className="flex flex-col gap-[1.6rem]">
      <AddCard />
      {cardList && cardList.map(card => <Card cardData={card} />)}
    </section>
  );
}
