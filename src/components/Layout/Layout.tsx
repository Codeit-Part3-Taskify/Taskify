import { Outlet } from 'react-router-dom';
import Sidebar from './SideBarLayout';
import Modal from './Modal';
import Navbar from './NavbarLayout';

export default function Layout() {
  return (
    <div className="relative flex h-full">
      <Modal />
      <div className="fixed top-0 z-0">
        <Navbar />
      </div>
      <div className="absolute top-0 left-0 h-full bg-white border-r-[0.1rem] border-gray_D9D9D9">
        <Sidebar />
      </div>
      <div className="tablet:mt-[7rem] mt-[6rem] ml-[6.7rem] tablet:ml-[16rem] desktop:ml-[30rem] desktop:whitespace-nowrap tablet:h-[calc(100vh-7rem)] h-[calc(100vh-6rem)] desktop:overflow-x-auto">
        <Outlet />
      </div>
    </div>
  );
}
