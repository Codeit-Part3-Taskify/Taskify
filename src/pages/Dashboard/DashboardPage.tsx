import Column from 'src/components/Dashboard/Column';
import AddColumn from 'src/components/Dashboard/AddColumn';
import Modal from 'src/components/Layout/Modal';
import AlertDeleteCard from 'src/components/Modal/AlertDeleteCard';

export default function Dashboard() {
  return (
    <main className="flex">
      <Column />
      <AddColumn />
    </main>
  );
}
