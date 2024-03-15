export default function PasswordInputBox() {
  return (
    <div>
      <input type="password" placeholder="현재 비밀번호를 입력하세요." />
      <input type="password" placeholder="새 비밀번호를 입력하세요." />
      <input
        className=" w-[56.4rem] basicinput"
        type="password"
        placeholder="새 비밀번호를 다시 입력하세요."
      />
      <button className="violetbutton w-[8.4rem] h-[3.2rem] " type="button">
        변경
      </button>
    </div>
  );
}
