import useCreateColumn from 'src/hooks/useCreateColumn';
import Button from 'src/components/Buttons/Button';
import ModalResetButton from '../../Buttons/ModalResetButton';
import LabelAndInput from '../LabelAndInput/LabelAndInput';

export default function CreateColumn() {
  const { handleSubmit, value, setValue } = useCreateColumn();
  return (
    <>
      <h2 className="text-[#333236] mb-[3.2rem] text-[2.4rem] font-bold">
        새 컬럼 생성
      </h2>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <LabelAndInput
          title="이름"
          type="text"
          id="name"
          placeholder="새로운 프로젝트"
          value={value}
          setValue={setValue}
        />
        <div className="flex justify-end gap-[1.2rem]">
          <ModalResetButton>취소</ModalResetButton>
          <Button
            variant="primary"
            type="submit"
            customStyles="w-[12rem] h-[4.8rem] rounded-[0.8rem] font-medium text-[1.6rem]"
            disabled={!value}
          >
            생성
          </Button>
        </div>
      </form>
    </>
  );
}
