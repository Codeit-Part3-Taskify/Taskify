import Button from '../Buttons/Button';

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
      <Button
        variant="primary"
        customStyles="w-[8.4rem] h-[3.2rem] text-[1.4rem] rounded-[0.4rem]"
        type="button"
      >
        변경
      </Button>
    </div>
  );
}
