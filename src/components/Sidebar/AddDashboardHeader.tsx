import { useState } from 'react';
import addBox from 'src/assets/images/add-box.svg';
import Modal from '../Layout/Modal';
import CreateDashBoard from '../Modal/CreateDashboard';

export default function AddDashboardHeader() {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className="flex items-center justify-center desktop:justify-between">
      <span className="font-bold text-gray_787486 text-[1.2rem] pr-[2.4rem] mobile:hidden tablet:inline">
        Dash Boards
      </span>
      <img
        className="w-[2rem] h-[2rem] cursor-pointer"
        src={addBox}
        alt="대시보드 추가 버튼"
        onClick={() => setShowModal(true)}
        onKeyDown={() => setShowModal(true)}
        role="presentation"
      />
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <CreateDashBoard />
        </Modal>
      )}
    </header>
  );
}
