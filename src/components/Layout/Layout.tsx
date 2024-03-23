import { Outlet } from 'react-router-dom';
import Sidebar from './SideBarLayout';
import Modal from './Modal';
import Navbar from './NavbarLayout';

export default function Layout() {
  return (
    <div className="relative flex">
      <Modal />
      <div className="absolute top-0 left-0 z-10">
        <Sidebar />
      </div>
      <div className="absolute top-0 z-5">
        <Navbar />
      </div>
      <div className="tablet:mt-[7rem] mt-[6rem] ml-[6.7rem] tablet:ml-[16rem] desktop:ml-[30rem]">
        <Outlet />
      </div>
    </div>
  );
}
