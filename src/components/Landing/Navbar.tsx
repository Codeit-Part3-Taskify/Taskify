import { Link } from 'react-router-dom';
import taskify from 'src/assets/images/Taskify-white.svg';
import logo from 'src/assets/images/logo-white.svg';

export default function LandingNavBar() {
  return (
    <nav className="flex justify-center ">
      <div className="flex justify-between items-center h-[7rem] w-[100%] tablet:text-[1.6rem] text-[1.4rem] max-w-[180rem] tablet:ml-[2rem] ml-[2.4rem] desktop:mr-[8rem] tablet:mr-[4rem] mx-[2.4rem]">
        <div className="flex items-center justify-center">
          <img
            className="tablet:w-[3.5rem] tablet:h-[3.5rem] tablet:pl-[0.62rem] tablet:pb-[0.2rem] w-[2.3rem] h-[2.7rem] "
            src={logo}
            alt="Taskify 로고"
          />
          <img
            className="w-[8rem] h-[2.2rem] mobile:hidden tablet:inline"
            src={taskify}
            alt="Taskify 텍스트"
          />
        </div>
        <div className="flex tablet:gap-[3.6rem] gap-[2rem]">
          <Link to="/login">로그인</Link>
          <Link to="/signup">회원가입</Link>
        </div>
      </div>
    </nav>
  );
}
