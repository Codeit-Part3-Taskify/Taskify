import { useParams } from 'react-router-dom';
import readColumnList from 'src/apis/readColumnList';
import Column from 'src/components/Dashboard/Column';
import AddColumn from 'src/components/Dashboard/AddColumn';
import { useQuery } from '@tanstack/react-query';
import Modal from 'src/components/Layout/Modal';

export default function Dashboard() {
  const { boardId } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ['readColumnList', boardId],
    queryFn: readColumnList
  });

  if (isLoading) return 'Loading';
  return (
    <main className="flex">
      <Modal />
      {data?.data?.map((column: any) => (
        <Column key={column.id} columnInfo={column} />
      ))}
      <AddColumn />
    </main>
  );
}
