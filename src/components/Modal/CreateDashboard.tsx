import ColorSelector from '../ColorSelector/ColorSelector';

export default function CreateDashBoard() {
  return (
    <>
      <h2 className="text-[#333236] mb-[3.2rem] text-[2.4rem] font-bold">
        새로운 대시보드
      </h2>
      <form className="flex flex-col">
        <label
          className="text-[1.8rem] text-[#333236] mb-[1rem] font-medium"
          htmlFor="inputId"
        >
          대시보드 이름
        </label>
        <input
          className="w-[48.4rem] h-[4.8rem] border border-[#D9D9D9] bg-[#FFF] rounded-[0.6rem] px-[1.6rem] mb-[2.8rem] text-[#333236] outline-none text-[1.6rem]"
          id="InputId"
          type="text"
          placeholder="대시보드 이름을 입력하세요."
        />
        <ColorSelector />
        <div className="flex justify-end gap-[1.2rem] mt-[2.8rem]">
          <button
            type="reset"
            className="w-[12rem] h-[4.8rem] border rounded-[0.8rem] text-[#787486] text-[1.6rem]"
          >
            취소
          </button>
          <button
            type="submit"
            className="w-[12rem] h-[4.8rem] border rounded-[0.8rem] text-[#fff] bg-[#5534DA] font-medium text-[1.6rem]"
          >
            생성
          </button>
        </div>
      </form>
    </>
  );
}
