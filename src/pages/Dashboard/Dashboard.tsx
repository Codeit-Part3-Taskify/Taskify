import Sidebar from '../../components/Layout/SideBar';
import Column from '../../components/Dashboard/Column';
import AddColumn from '../../components/Dashboard/AddColumn';
import CardDetail from '../../components/Modal/CardDetail';
import Modal from '../../components/Layout/Modal';

export default function Dashboard() {
  return (
    <main className="w-screen h-screen bg-[#FAFAFA] flex">
      <Modal>
        <CardDetail />
      </Modal>
      <Sidebar />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <AddColumn />
    </main>
  );
}
