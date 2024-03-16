import PasswordInputBox from './PasswordInputBox';

export default function PasswordFormArea() {
  return (
    <form>
      <div className="text-zinc-800 text-2xl font-bold font-['Pretendard']">
        비밀번호 변경
      </div>
      <PasswordInputBox />
    </form>
  );
}
