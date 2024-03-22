import useCreateColumn from 'src/hooks/useCreateColumn';
import ModalSubmitButton from 'src/components/Buttons/ModalSubmitButton';
import ModalResetButton from '../../Buttons/ModalResetButton';

const BasicStyle = `w-[48.4rem] h-[4.8rem] border border-[#D9D9D9] bg-[#FFF] rounded-[0.6rem] px-[1.6rem] mb-[2.8rem] text-[#333236] outline-none text-[1.6rem]`;

export default function CreateColumn() {
  const { handleSubmit, submit, register, watch } = useCreateColumn();
  const { title } = watch();
  return (
    <>
      <h2 className="text-[#333236] mb-[3.2rem] text-[2.4rem] font-bold">
        새 컬럼 생성
      </h2>
      <form className="flex flex-col" onSubmit={handleSubmit(submit)}>
        <div className="relative flex flex-col">
          <label
            className="text-[1.8rem] text-[#333236] mb-[1rem] font-medium"
            htmlFor="title"
          >
            이름
          </label>
          <input
            className={BasicStyle}
            id="title"
            placeholder="새로운 프로젝트"
            {...register('title')}
          />
        </div>

        <div className="flex justify-end gap-[1.2rem]">
          <ModalResetButton>취소</ModalResetButton>
          <ModalSubmitButton disabled={!title}>생성</ModalSubmitButton>
        </div>
      </form>
    </>
  );
}
