import useManageColumn from 'src/hooks/useManageColumn';
import { BasicStyle } from 'src/constants/inputstyle';
import ModalSubmitButton from 'src/components/Buttons/ModalSubmitButton';
import ModalResetButton from '../../Buttons/ModalResetButton';

export default function ManageColumn() {
  const { handleSubmit, submit, handleDeleteClick, register } =
    useManageColumn();

  return (
    <>
      <h2 className="text-[#333236] mb-[3.2rem] text-[2.4rem] font-bold">
        컬럼 관리
      </h2>
      <form className="flex flex-col" onSubmit={handleSubmit(submit)}>
        <div className="relative flex flex-col">
          <label
            className="text-[1.8rem] text-[#333236] mb-[1rem] font-medium"
            htmlFor="name"
          >
            이름
          </label>
          <input
            className={BasicStyle}
            id="name"
            type="text"
            {...register('title')}
          />
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            className="underline text-[1.4rem] text-[#9FA6B2] flex items-end cursor-pointer"
            onClick={handleDeleteClick}
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
