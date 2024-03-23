import envelope from 'src/assets/images/envelope.svg';
import facebook from 'src/assets/images/facebook.svg';
import instagram from 'src/assets/images/instagram.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="flex tablet:flex-row flex-col items-center justify-between w-screen text-gray_9FA6B2 tablet:text-[1.6rem] text-[1.2rem] desktop:px-[14rem] tablet:px-[4rem] tablet:py-[4rem] py-[9rem]">
      <p className="tablet:mb-0 mb-[1.2rem]">©codeit - 2023</p>
      <div className="flex tablet:gap-[3.2rem] gap-[2rem] tablet:mb-0 mb-[6.8rem]">
        <p>Privacy Policy</p>
        <p>FAQ</p>
      </div>
      <div className="flex gap-[1.4rem]">
        <a href="mailto:Taskify@codeit.com">
          <img
            src={envelope}
            alt="메일 아이콘"
            className="tablet:w-[2rem] tablet:h-[2rem] w-[1.8rem] h-[1.8rem]"
          />
        </a>
        <Link to="https://www.facebook.com/">
          <img
            src={facebook}
            alt="페이스북 아이콘"
            className="tablet:w-[2rem] tablet:h-[2rem] w-[1.8rem] h-[1.8rem]"
          />
        </Link>
        <Link to="https://www.instagram.com/">
          <img
            src={instagram}
            alt="인스타그램 아이콘"
            className="tablet:w-[2rem] tablet:h-[2rem] w-[1.8rem] h-[1.8rem]"
          />
        </Link>
      </div>
    </footer>
  );
}
