import { useSetAtom } from 'jotai';
import { modalAtom } from 'src/store/store';
import addBox from 'src/assets/images/add-box.svg';

export default function AddDashboardHeader() {
  const setModal = useSetAtom(modalAtom);

  return (
    <header className="flex items-center justify-center desktop:justify-between">
      <span className="font-bold text-gray_787486 text-[1.2rem] pr-[2.4rem] mobile:hidden tablet:inline">
        Dash Boards
      </span>
      <img
        className="w-[2rem] h-[2rem] cursor-pointer"
        src={addBox}
        alt="대시보드 추가 버튼"
        onClick={() =>
          setModal(prev => ({
            ...prev,
            name: 'createDashboard',
            status: true
          }))
        }
        role="presentation"
      />
    </header>
  );
}
