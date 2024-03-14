import CreateColumn from 'src/components/Modal/CreateColumn';
import Column from 'src/components/Dashboard/Column';
import AddColumn from 'src/components/Dashboard/AddColumn';
import Modal from 'src/components/Layout/Modal';

export default function Dashboard() {
  return (
    <main className="w-screen h-screen bg-[#FAFAFA] flex">
      <Modal>
        <CreateColumn />
      </Modal>
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <AddColumn />
    </main>
  );
}
