import { Helmet } from 'react-helmet-async';
import SignUpForm from '../../components/LogIn/SignUpForm';
import TaskifyLogo from '../../components/LogIn/TaskifyLogo';

export default function LogIn() {
  return (
    <div className="flex flex-col justify-center items-center mt-[22.3rem]">
      <Helmet>
        <title>Taskify 회원가입</title>
      </Helmet>
      <TaskifyLogo />
      <SignUpForm />
      <div className="text-[1.6rem]">
        이미 가입하셨나요?{' '}
        <a href="/login" className="text-purple-700 underline">
          로그인하기
        </a>
      </div>
    </div>
  );
}
