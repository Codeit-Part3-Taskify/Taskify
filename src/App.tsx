import SideBar from './components/Layout/SideBar';
import PagenationButtons from './components/Buttons/PagenationButtons';
import ColorSelector from './components/ColorSelector/ColorSelector';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <div className="flex">
          <Route path="/" element={<Dashboard />} />

          <SideBar />
          <ColorSelector />
          <PagenationButtons />
          <Profile />
        </div>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
