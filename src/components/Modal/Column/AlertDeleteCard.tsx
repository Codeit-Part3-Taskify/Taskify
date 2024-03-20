import useManageColumn from 'src/hooks/useManageColumn';
import ModalResetButton from '../../Buttons/ModalResetButton';
import ModalSubmitButton from '../../Buttons/ModalSubmitButton';

export default function AlertDeleteCard() {
  const { handleDeleteAlertClick } = useManageColumn();
  return (
    <>
      <h3 className="flex items-center justify-center mt-[7.6rem] pb-[4.5rem] mx-[11.2rem] text-[1.8rem] font-medium">
        컬럼의 모든 카드가 삭제됩니다.
      </h3>
      <div className="flex justify-end gap-[1.2rem]">
        <ModalResetButton>취소</ModalResetButton>
        <ModalSubmitButton onClick={handleDeleteAlertClick}>
          삭제
        </ModalSubmitButton>
      </div>
    </>
  );
}
