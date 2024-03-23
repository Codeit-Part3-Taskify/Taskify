import AlertPassword from 'src/components/Modal/AlertPassword';
import CardDetail from 'src/components/Modal/Card/CardDetail';
import CreateCard from 'src/components/Modal/Card/CreateCard';
import UpdateCard from 'src/components/Modal/Card/UpdateCard';
import AlertDeleteCard from 'src/components/Modal/Column/AlertDeleteCard';
import CreateColumn from 'src/components/Modal/Column/CreateColumn';
import ManageColumn from 'src/components/Modal/Column/ManageColumn';
import CreateDashBoard from 'src/components/Modal/CreateDashboard';
import InviteMember from 'src/components/Modal/InviteMember';
import SignUpConfirm from 'src/components/Modal/SignUpConfirm';

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
    case 'signUpConfirm':
      return <SignUpConfirm />;
    default:
      return null;
  }
};
