import { useState } from 'react';
import { ColumnData } from 'src/types/columnTypes';
import useInfiniteScrollCards from 'src/hooks/useInfiniteScrollColumn';
import useUpdateCard from 'src/hooks/useUpdateCard';
import readCardDetail from 'src/apis/readCardDetail';
import { useQuery } from '@tanstack/react-query';
import { CardData, PutCard } from 'src/types/cardTypes';
import Cards from '../Card/Cards';
import ColumnInfo from './ColumnInfo';

interface Props {
  columnInfo: ColumnData;
}
export default function Column({ columnInfo }: Props) {
  const { updateCardMutation, data } = useUpdateCard();
  const handleDrop = (e: any) => {
    const cardId = e.dataTransfer.getData('cardId');
    const body = {
      assigneeUserId: data?.assignee.id,
      columnId: columnInfo.id,
      title: data?.title,
      description: data?.description,
      dueData: data?.dueDate,
      tags: data?.tags,
      imageUrl: data?.imageUrl
    };
    updateCardMutation({ cardId, body });
  };
  return (
    <section
      className="p-[1.2rem] border-r border-b border-r-[#EEEEEE] w-[calc(100vw-16rem)] tablet:p-[2rem] desktop:w-[35.4rem] shrink-0 min-w-[31rem]"
      onDragOver={e => e.preventDefault()}
      onDrop={handleDrop}
    >
      <ColumnInfo columnInfo={columnInfo} />
      <Cards columnInfo={columnInfo} />
    </section>
  );
}
