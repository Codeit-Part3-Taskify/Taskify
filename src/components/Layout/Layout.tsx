import { Outlet } from 'react-router-dom';
import Sidebar from './SideBarLayout';
import Modal from './Modal';
import Navbar from './NavbarLayout';

export default function Layout() {
  return (
    <div className="relative flex">
      <Modal />
      <Sidebar />
      <div className="flex flex-col">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
