export default function AlertDeleteCard() {
  return (
    <>
      <h3 className="flex items-center justify-center mt-[7.6rem] pb-[4.5rem] mx-[11.2rem] text-[1.8rem] font-medium">
        컬럼의 모든 카드가 삭제됩니다.
      </h3>
      <div className="flex justify-end gap-[1.2rem]">
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
          삭제
        </button>
      </div>
    </>
  );
}
