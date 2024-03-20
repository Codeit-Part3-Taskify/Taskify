import useCreateDashBoard from 'src/hooks/useCreateDashBoard';
import ModalResetButton from '../Buttons/ModalResetButton';
import ModalSubmitButton from '../Buttons/ModalSubmitButton';
import ColorSelector from '../ColorSelector/ColorSelector';

export default function CreateDashBoard() {
  const { selectedColor, setSelectedColor, errorMessage, onSubmit, isPending } =
    useCreateDashBoard();

  return (
    <>
      <h2 className="text-[#333236] mb-[3.2rem] text-[2.4rem] font-bold">
        새로운 대시보드
      </h2>
      <form onSubmit={onSubmit} className="flex flex-col">
        <label
          className="text-[1.8rem] text-[#333236] mb-[1rem] font-medium"
          htmlFor="inputId"
        >
          대시보드 이름
        </label>
        <input
          className={`w-[48.4rem] h-[4.8rem] border border-[#D9D9D9] bg-[#FFF] rounded-[0.6rem] px-[1.6rem] text-[#333236] outline-none text-[1.6rem] ${
            errorMessage ? '' : 'mb-[2.8rem]'
          }`}
          id="inputId"
          type="text"
          placeholder="대시보드 이름을 입력하세요."
        />
        {errorMessage && (
          <p className="text-red_D6173A text-[1.6rem] py-[1rem]">
            {errorMessage}
          </p>
        )}
        <ColorSelector
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <div className="flex justify-end gap-[1.2rem] mt-[2.8rem]">
          <ModalResetButton>취소</ModalResetButton>
          <ModalSubmitButton disabled={isPending}>생성</ModalSubmitButton>
        </div>
      </form>
    </>
  );
}
