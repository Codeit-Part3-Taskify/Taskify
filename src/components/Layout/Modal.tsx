import type { ModalType } from 'src/types/modalTypes';
import ReactDOM from 'react-dom';
import AlertDeleteCard from '../Modal/AlertDeleteCard';
import AlertPassword from '../Modal/AlertPassword';
import CardDetail from '../Modal/CardDetail';
import CreateCard from '../Modal/CreateCard';
import CreateColumn from '../Modal/CreateColumn';
import CreateDashBoard from '../Modal/CreateDashboard';
import InviteMember from '../Modal/InviteMember';
import ManageColumn from '../Modal/ManageColumn';
import UpdateCard from '../Modal/UpdateCard';

interface Props {
  modalName: ModalType;
}

export default function Modal({ modalName }: Props) {
  const modalSelector = (name: string) => {
    switch (name) {
      case 'alertDeleteCard':
        return <AlertDeleteCard />;
      case 'alertPassword':
        return <AlertPassword />;
      case 'cardDetail':
        return <CardDetail />;
      case 'createCard':
        return <CreateCard />;
      case 'createColumn':
        return <CreateColumn />;
      case 'createDashboard':
        return <CreateDashBoard />;
      case 'inviteMember':
        return <InviteMember />;
      case 'manageColumn':
        return <ManageColumn />;
      case 'updateCard':
        return <UpdateCard />;
      default:
        return null;
    }
  };

  return ReactDOM.createPortal(
    <>
      <div
        role="button"
        aria-label="Close Modal"
        className="fixed top-0 bottom-0 w-screen h-screen bg-black opacity-70"
      />
      <div className="fixed top-0 flex items-center justify-center w-screen h-screen">
        <div className="px-[2.8rem] pt-[3.2rem] pb-[2.8rem] bg-[#fff] rounded-[0.8rem]">
          {modalSelector(modalName)}
        </div>
      </div>
    </>,
    document.body
  );
}
