import ReactDOM from 'react-dom';
import { useAtomValue } from 'jotai';
import { modalAtom } from 'src/store/store';
import AlertDeleteCard from 'src/components/Modal/Column/AlertDeleteCard';
import AlertPassword from 'src/components/Modal/AlertPassword';
import CreateCard from 'src/components/Modal/Card/CreateCard';
import CreateColumn from 'src/components/Modal/Column/CreateColumn';
import CreateDashBoard from 'src/components/Modal/CreateDashboard';
import InviteMember from 'src/components/Modal/InviteMember';
import ManageColumn from 'src/components/Modal/Column/ManageColumn';
import UpdateCard from 'src/components/Modal/Card/UpdateCard';
import ModalContainer from '../Modal/Container/ModalContainer';
import CardDetail from '../Modal/Card/CardDetail';

const modalList = {
  '': '',
  alertDeleteCard: <AlertDeleteCard />,
  alertPassword: <AlertPassword />,
  cardDetail: <CardDetail />,
  createCard: <CreateCard />,
  createColumn: <CreateColumn />,
  createDashboard: <CreateDashBoard />,
  inviteMember: <InviteMember />,
  manageColumn: <ManageColumn />,
  updateCard: <UpdateCard />
};

export default function Modal() {
  const modal = useAtomValue(modalAtom);
  return ReactDOM.createPortal(
    modal['status'] && <ModalContainer>{modalList[modal.name]}</ModalContainer>,
    document.body
  );
}
