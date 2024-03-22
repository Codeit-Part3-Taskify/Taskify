import TaskifyLogo from '../../components/LogIn/TaskifyLogo';
import LogInForm from '../../components/LogIn/LogInForm';

export default function LogIn() {
  return (
    <div className="flex flex-col justify-center items-center mt-[22.3rem]">
      <TaskifyLogo />
      <LogInForm />
      <div className="text-[1.6rem]">
        회원이 아니신가요?{' '}
        <a href="/signup" className="text-purple-700 underline">
          회원가입하기
        </a>
      </div>
    </div>
  );
}
