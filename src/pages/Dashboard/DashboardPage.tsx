import { useParams } from 'react-router-dom';
import readColumnList from 'src/apis/readColumnList';
import Column from 'src/components/Dashboard/Column/Column';
import AddColumn from 'src/components/Dashboard/Column/AddColumn';
import { useQuery } from '@tanstack/react-query';
import Modal from 'src/components/Layout/Modal';
import { useSetAtom } from 'jotai';
import { boardIdAtom } from 'src/store/store';
import { ColumnData } from 'src/types/columnTypes';

export default function Dashboard() {
  const { boardId } = useParams();
  const setBoardId = useSetAtom(boardIdAtom);
  setBoardId(boardId);
  const { data } = useQuery({
    queryKey: ['readColumnList', boardId],
    queryFn: readColumnList
  });
  return (
    <main className="flex">
      <Modal />
      {data?.data?.map((column: ColumnData) => (
        <Column key={column.id} columnInfo={column} />
      ))}
      <AddColumn />
    </main>
  );
}
