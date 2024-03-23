import plusBtn from 'src/assets/images/plus.svg';
import { useSetAtom } from 'jotai';
import { modalAtom } from 'src/store/store';
import Button from 'src/components/Buttons/Button';

export default function AddDashboard() {
  const setModal = useSetAtom(modalAtom);
  return (
    <Button
      variant="secondary"
      customStyles="rounded-[0.6rem] gap-[1.2rem] w-[33.2rem] h-[7rem]"
      appendix={
        <img
          src={plusBtn}
          alt="더하기 버튼"
          className="w-[2.2rem] h-[2.2rem] bg-[#F1EFFD] rounded"
        />
      }
      onClick={() =>
        setModal(prev => ({
          ...prev,
          name: 'createDashboard',
          status: true
        }))
      }
    >
      <span className="text-[1.6rem] font-bold">새로운 대시보드</span>
    </Button>
  );
}
