import { Helmet } from 'react-helmet-async';
import LogInForm from '../../components/LogIn/LogInForm';
import TaskifyLogo from '../../components/LogIn/TaskifyLogo';

export default function LogIn() {
  return (
    <div className="flex flex-col justify-center items-center mt-[22.3rem]">
      <Helmet>
        <title>Taskify 로그인</title>
      </Helmet>
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
