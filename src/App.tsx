import Modal from './components/Layout/Modal';
import SideBar from './components/Layout/SideBar';
import CreateColumn from './components/Modal/CreateColumn';
import EditDashboardPage from './pages/EditDashboardPage';

function App() {
  return (
    <div className="flex">
      {!true && (
        <Modal>
          <CreateColumn />
        </Modal>
      )}
      <EditDashboardPage />
    </div>
  );
}

export default App;
