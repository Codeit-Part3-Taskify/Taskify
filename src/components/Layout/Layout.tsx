import { Outlet } from 'react-router-dom';
import Sidebar from './SideBarLayout';
import Modal from './Modal';

export default function Layout() {
  return (
    <div className="relative flex">
      <Sidebar />
      <Modal />
      <Outlet />
    </div>
  );
}
