export default function ManageColumn() {
  return (
    <>
      <h2 className="text-[#333236] mb-[3.2rem] text-[2.4rem] font-bold">
        컬럼 관리
      </h2>
      <form className="flex flex-col">
        <label
          className="text-[1.8rem] text-[#333236] mb-[1rem] font-medium"
          htmlFor="inputId"
        >
          이름
        </label>
        <input
          className="w-[48.4rem] h-[4.8rem] border border-[#D9D9D9] bg-[#FFF] rounded-[0.6rem] px-[1.6rem] mb-[2.8rem] text-[#333236] outline-none placeholder:text-[#333236] text-[1.6rem]"
          id="InputId"
          type="text"
          placeholder="Done"
        />
        <div className="flex justify-between">
          <span className="underline text-[1.4rem] text-[#9FA6B2] flex items-end cursor-pointer">
            삭제하기
          </span>
          <div className="flex gap-3">
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
              변경
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
