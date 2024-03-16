import Button from '../Buttons/Button';

export default function PasswordInputBox() {
  return (
    <div>
      <label
        className="text-zinc-800 text-[1.8rem] font-medium font-['Pretendard']"
        htmlFor="CurrentPassword"
      >
        현재 비밀번호
      </label>
      <input
        id="CurrentPassword"
        className=" w-[56.4rem] basicinput"
        type="password"
        placeholder="현재 비밀번호 입력"
      />
      <label
        className="text-zinc-800 text-[1.8rem] font-medium font-['Pretendard']"
        htmlFor="NewPassword"
      >
        새 비밀번호
      </label>
      <input
        id="NewPassword"
        className=" w-[56.4rem] basicinput placeholder-gray-400 "
        type="password"
        placeholder="새 비밀번호 입력"
      />
      <label
        className="text-zinc-800 text-[1.8rem] font-medium font-['Pretendard']"
        htmlFor="NewPasswordConfirm"
      >
        새 비밀번호 확인
      </label>
      <input
        id="NewPasswordConfirm"
        className=" w-[56.4rem] basicinput text-gray-400 font-['Pretendard']"
        type="password"
        placeholder="새 비밀번호 입력"
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
