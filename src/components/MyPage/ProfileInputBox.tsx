import Button from '../Buttons/Button';

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
        <Button
          variant="primary"
          type="button"
          customStyles="w-[8.4rem] h-[3.2rem] text-[1.4rem] rounded-[0.4rem]"
        >
          저장
        </Button>
      </form>
    </div>
  );
}
