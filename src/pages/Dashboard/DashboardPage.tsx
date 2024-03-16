import { useParams } from 'react-router-dom';
import { atom, useAtom } from 'jotai';
import { columnListAtom } from 'src/store/store';
import Column from 'src/components/Dashboard/Column';
import AddColumn from 'src/components/Dashboard/AddColumn';

export default function Dashboard() {
  const { boardId } = useParams();
  const boardIdAtom = atom(boardId);
  console.log(boardIdAtom);
  const [{ data }] = useAtom(columnListAtom);
  console.log(data);
  return (
    <main className="flex">
      <Column />
      <AddColumn />
    </main>
  );
}
