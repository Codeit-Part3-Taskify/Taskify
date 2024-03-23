import landing from 'src/assets/images/landing.png';
import taskify from 'src/assets/images/Taskify.svg';
import { useNavigate } from 'react-router-dom';
import LandingNavBar from './Navbar';
import Button from '../Buttons/Button';

export default function HeroHeader() {
  const navigate = useNavigate();

  return (
    <header className="text-white tablet:mb-[18.4rem] mb-[8rem]">
      <LandingNavBar />
      <div className="flex flex-col items-center justify-center w-screen">
        <img
          src={landing}
          className="w-screen mt-[9.4rem] tablet:mb-[4.82rem] mb-[2.6rem] desktop:w-[72.2rem] tablet:w-[53.7rem] tablet:px-0 px-[4.4rem] max-w-[62.5rem] tablet:max-w-none"
          alt="랜딩 이미지"
        />
        <div className="flex tablet:flex-row flex-col items-center desktop:gap-[2.8rem] tablet:gap-[2.4rem] gap-[0.5rem]">
          <p className="desktop:text-[7.6rem] tablet:text-[5.6rem] text-[4rem] font-bold leading-[10rem] tablet:leading-[10rem] leading-normal">
            새로운 일정 관리
          </p>
          <img
            src={taskify}
            alt="Taskify 텍스트"
            className="desktop:w-[32.7rem] tablet:w-[25.3rem] w-[15rem]"
          />
        </div>
        <p className="tablet:mt-[2.4rem] mt-[1.8rem] tablet:mb-[6.6rem] mb-[7rem] text-[1.8rem]">
          서비스의 메인 설명 들어갑니다.
        </p>
        <Button
          variant="primary"
          type="button"
          customStyles="desktop:text-[1.8rem] tablet:text-[1.6rem] text-[1.4rem] font-medium w-[28rem] tablet:py-[1.5rem] py-[1.3rem] rounded-[0.8rem]"
          onClick={() => navigate('/login')}
        >
          로그인하기
        </Button>
      </div>
    </header>
  );
}
