import taskify from 'src/assets/images/Taskify.svg';
import logo from 'src/assets/images/logo.svg';
import { Link } from 'react-router-dom';

export default function LogoText() {
  return (
    <Link to="/">
      <div className="pb-[3.8rem] cursor-pointer flex items-center justify-center tablet:pb-[6rem] desktop:justify-start">
        <img
          className="w-[2.3rem] h-[2.7rem]"
          src={logo}
          alt="홈으로 가는 Taskify 로고"
        />
        <img
          className="w-[8rem] h-[2.2rem] mobile:hidden tablet:inline"
          src={taskify}
          alt="홈으로 가는 Taskify 텍스트"
        />
      </div>
    </Link>
  );
}
