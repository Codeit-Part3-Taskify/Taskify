import Modal from './components/Layout/Modal';
import SideBar from './components/Layout/SideBar';
import CreateColumn from './components/Modal/CreateColumn';
import PagenationButtons from './components/Buttons/PagenationButtons';
import ColorSelector from './components/ColorSelector/ColorSelector';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="flex">
      {!true && (
        <Modal>
          <CreateColumn />
        </Modal>
      )}
      <SideBar />
      <ColorSelector />
      <PagenationButtons />
      <Profile />
    </div>
  );
}

export default App;
