export default function CreateColumn() {
  return (
    <>
      <h2 className="text-[#333236] mb-[32px] text-[24px] font-['Pretendard-700']">
        새 컬럼 생성
      </h2>
      <form className="flex flex-col">
        <label
          className="text-[18px] text-[#333236] mb-2.5 font-['Pretendard-500']"
          htmlFor="inputId"
        >
          이름
        </label>
        <input
          className="w-[484px] h-[48px] border border-[#D9D9D9] bg-[#FFF] rounded-md px-4 mb-7 text-[#333236] font-['Pretendard-400'] outline-none placeholder:text-[#333236]"
          id="InputId"
          type="text"
          placeholder="새로운 프로젝트"
        />
        <div className="flex gap-3 justify-end">
          <button
            type="reset"
            className="w-[120px] h-[48px] border rounded-lg font-['Pretendard-500'] text-[#787486]"
          >
            취소
          </button>
          <button
            type="submit"
            className="w-[120px] h-[48px] border rounded-lg text-[#fff] bg-[#5534DA] font-['Pretendard-500']"
          >
            생성
          </button>
        </div>
      </form>
    </>
  );
}
