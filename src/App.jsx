import Modal from './components/Layout/ModalLayer.tsx';
import CreateColumn from './components/Modal/CreateColumn.tsx';

function App() {
  return (
    <div>
      {true && (
        <Modal>
          <CreateColumn />
        </Modal>
      )}
      <h1>Hello, World!</h1>
      <p>This is a simple React app.</p>
    </div>
  );
}

export default App;
