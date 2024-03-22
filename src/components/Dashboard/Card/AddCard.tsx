import { useSetAtom } from 'jotai';
import plusBtn from 'src/assets/images/plus.svg';
import { modalAtom } from 'src/store/store';
import { ColumnData } from 'src/types/columnTypes';
import Button from '../../Buttons/Button';

interface Props {
  columnInfo: ColumnData;
}

export default function AddCard({ columnInfo }: Props) {
  const setModal = useSetAtom(modalAtom);
  return (
    <Button
      variant="secondary"
      customStyles="mt-[2.5rem] p-[0.9rem] rounded-[0.6rem]"
      onClick={() =>
        setModal(prev => ({
          ...prev,
          name: 'createCard',
          status: true,
          columnId: columnInfo.id
        }))
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
