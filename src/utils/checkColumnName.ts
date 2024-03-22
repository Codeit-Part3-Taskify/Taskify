import { useQuery } from '@tanstack/react-query';
import readColumnList from 'src/apis/readColumnList';

export default function checkColumnName(boardId: string | undefined) {
  const { data } = useQuery({
    queryKey: ['readColumnList', boardId],
    queryFn: () => readColumnList(boardId as string)
  });

  return data;
}
