import { useParams } from 'react-router-dom';
import readColumnList from 'src/apis/readColumnList';
import Column from 'src/components/Dashboard/Column/Column';
import AddColumn from 'src/components/Dashboard/Column/AddColumn';
import { useQuery } from '@tanstack/react-query';
import { ColumnData } from 'src/types/columnTypes';

export default function Dashboard() {
  const { boardId } = useParams();
  const { data } = useQuery({
    queryKey: ['readColumnList', boardId],
    queryFn: () => readColumnList(boardId as string)
  });

  return (
    <main className="flex flex-col desktop:h-full desktop:flex-row">
      {data?.data?.map((column: ColumnData) => (
        <Column key={column.id} columnInfo={column} />
      ))}
      <AddColumn />
    </main>
  );
}
