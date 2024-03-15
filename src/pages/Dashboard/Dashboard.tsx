import Column from 'src/components/Dashboard/Column';
import AddColumn from 'src/components/Dashboard/AddColumn';
import Modal from 'src/components/Layout/Modal';
import CreateCard from 'src/components/Modal/CreateCard';
import UpdateCard from 'src/components/Modal/UpdateCard';

export default function Dashboard() {
  return (
    <main className="w-screen h-screen bg-[#FAFAFA] flex">
      <Modal>
        <UpdateCard />
      </Modal>
      <Column />
      <AddColumn />
    </main>
  );
}
