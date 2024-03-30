import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import readColumnList from 'src/apis/readColumnList';
import AddColumn from 'src/components/Dashboard/Column/AddColumn';
import Column from 'src/components/Dashboard/Column/Column';
import { ColumnData } from 'src/types/columnTypes';

export default function Dashboard() {
  const { boardId } = useParams();
  const { data } = useQuery({
    queryKey: ['readColumnList', boardId],
    queryFn: () => readColumnList(boardId as string)
  });

  return (
    <main className="flex flex-col desktop:h-full desktop:flex-row">
      <Helmet>
        <title>Taskify 대시보드</title>
      </Helmet>
      {data?.data?.map((column: ColumnData) => (
        <Column key={column.id} columnInfo={column} />
      ))}
      <AddColumn />
    </main>
  );
}
