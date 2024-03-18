import AlertDeleteCard from 'src/components/Modal/AlertDeleteCard';
import AlertPassword from 'src/components/Modal/AlertPassword';
import CardDetail from 'src/components/Modal/CardDetail';
import CreateCard from 'src/components/Modal/CreateCard';
import CreateColumn from 'src/components/Modal/CreateColumn';
import CreateDashBoard from 'src/components/Modal/CreateDashboard';
import InviteMember from 'src/components/Modal/InviteMember';
import ManageColumn from 'src/components/Modal/ManageColumn';
import UpdateCard from 'src/components/Modal/UpdateCard';

export const selectModal = (name: string) => {
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
