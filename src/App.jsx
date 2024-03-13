import Modal from './components/Layout/Modal.tsx';
import SideBar from './components/Layout/SideBar.tsx';
import CreateColumn from './components/Modal/CreateColumn.tsx';
import Profile from './components/Layout/Profile.tsx';
import PagenationButtons from './components/Buttons/PagenationButtons/PagenationButtons.tsx';
import DashboardColorSelector from './components/ColorSelector/DashboardColorSelector.tsx';

function App() {
  return (
    <div className="flex">
      {!true && (
        <Modal>
          <CreateColumn />
        </Modal>
      )}
      <SideBar />
      <DashboardColorSelector />
      <PagenationButtons />
      <Profile />
    </div>
  );
}

export default App;
