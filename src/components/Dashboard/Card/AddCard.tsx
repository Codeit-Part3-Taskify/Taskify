import { useSetAtom } from 'jotai';
import plusBtn from 'src/assets/images/plus.svg';
import { modalAtom } from 'src/store/store';
import Button from '../../Buttons/Button';

export default function AddCard() {
  const setModal = useSetAtom(modalAtom);
  return (
    <Button
      variant="secondary"
      customStyles="mt-[2.5rem] p-[0.9rem] rounded-[0.6rem]"
      onClick={() =>
        setModal(prev => ({ ...prev, name: 'createCard', status: true }))
      }
    >
      <img
        src={plusBtn}
        alt="더하기 버튼"
        className="w-[2.2rem] h-[2.2rem] bg-[#F1EFFD] rounded"
      />
    </Button>
  );
}
