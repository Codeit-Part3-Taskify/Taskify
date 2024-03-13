import Modal from './components/Layout/Modal.tsx';
import CreateColumn from './components/Modal/CreateColumn.tsx';
import PagenationButtons from './components/Buttons/PagenationButtons/PagenationButtons.tsx';
import DashboardColorSelector from './components/ColorSelector/DashboardColorSelector.tsx';

function App() {
  return (
    <div>
      {true && (
        <Modal>
          <CreateColumn />
          <PagenationButtons />
          <DashboardColorSelector />
        </Modal>
      )}
      <h1>Hello, World!</h1>
      <p>This is a simple React app.</p>
    </div>
  );
}

export default App;
