import { useQuery } from '@tanstack/react-query';
import readCardList from 'src/apis/readCardList';

export default function useCardList() {
  const query = useQuery({
    queryKey: ['cardList'],
    queryFn: readCardList
  });

  return query;
}
