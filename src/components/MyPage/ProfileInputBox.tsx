export default function ProfileBox() {
  return (
    <div>
      <form className="flex flex-row">
        <input type="file" />
        <div className="flex flex-col">
          <label
            htmlFor="EmailInput"
            className="text-zinc-800 text-[1.8rem] font-medium font-['Pretendard']"
          >
            이메일
          </label>
          <input id="EmailInput" className="basicinput" type="text" />
          <label
            htmlFor="NicknameInput"
            className="text-zinc-800 text-[1.8rem] font-medium font-['Pretendard']"
          >
            닉네임
          </label>
          <input id="NicknameInput" className="basicinput" type="text" />
        </div>
        <button type="button" className="violetbutton w-[8.4rem] h-[3.2rem] ">
          저장
        </button>
      </form>
    </div>
  );
}
