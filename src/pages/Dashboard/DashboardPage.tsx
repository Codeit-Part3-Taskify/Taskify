import { atom, useAtomValue } from 'jotai';
import { useParams } from 'react-router-dom';
import readColumnList from 'src/apis/readColumnList';
import Column from 'src/components/Dashboard/Column';
import AddColumn from 'src/components/Dashboard/AddColumn';
import { useQuery } from '@tanstack/react-query';
import Modal from 'src/components/Layout/Modal';
import { ModalType } from 'src/types/modalTypes';

export const modalAtom = atom<{ status: boolean; name: ModalType }>({
  status: false,
  name: ''
});

export default function Dashboard() {
  const { boardId } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ['readColumnList', boardId],
    queryFn: readColumnList
  });
  const modal = useAtomValue(modalAtom);

  if (isLoading) return 'Loading';
  return (
    <main className="flex">
      {modal['status'] && <Modal modalName={modal['name']} />}
      {data?.data?.map((column: any) => (
        <Column key={column.id} columnInfo={column} />
      ))}
      <AddColumn />
    </main>
  );
}
