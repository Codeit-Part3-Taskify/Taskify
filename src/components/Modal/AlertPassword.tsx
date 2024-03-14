export default function AlertPassword() {
  return (
    <>
      <h3 className="flex items-center justify-center mt-[7.6rem] pb-[4.5rem] mx-[11.2rem] text-[1.8rem] font-medium">
        현재 비밀번호가 틀렸습니다.
      </h3>
      <div className="flex justify-end">
        <button
          type="submit"
          className="w-[12rem] h-[4.8rem] border rounded-[0.8rem] text-[#fff] bg-[#5534DA] font-medium text-[1.6rem]"
        >
          확인
        </button>
      </div>
    </>
  );
}
