import useManageColumn from 'src/hooks/useManageColumn';
import Button from 'src/components/Buttons/Button';
import ModalResetButton from '../../Buttons/ModalResetButton';
import LabelAndInput from '../LabelAndInput/LabelAndInput';
import ModalSubmitButton from 'src/components/Buttons/ModalSubmitButton';

export default function ManageColumn() {
  const { inputValue, setValue, handleClick, handleSubmit } = useManageColumn();

  return (
    <>
      <h2 className="text-[#333236] mb-[3.2rem] text-[2.4rem] font-bold">
        컬럼 관리
      </h2>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <LabelAndInput
          title="이름"
          type="text"
          id="name"
          placeholder="Done"
          value={inputValue}
          setValue={setValue}
        />
        <div className="flex justify-between">
          <button
            type="button"
            className="underline text-[1.4rem] text-[#9FA6B2] flex items-end cursor-pointer"
            onClick={handleClick}
          >
            삭제하기
          </button>
          <div className="flex gap-3">
            <ModalResetButton>취소</ModalResetButton>
            <ModalSubmitButton>변경</ModalSubmitButton>
          </div>
        </div>
      </form>
    </>
  );
}
