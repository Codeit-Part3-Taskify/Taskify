import Logo from '../../assets/images/logo.svg';
import Taskify from '../../assets/images/Taskify.svg';

export default function TaskifyLogo() {
  return (
    <div className="w-[20rem] h-[27.9rem] flex flex-col mb-[3.8rem]">
      <a href="/">
        <img
          src={Logo}
          alt="로고"
          className="w-[16.4rem] h-[18.9rem] top-0 ml-auto"
        />
        <img
          src={Taskify}
          alt="Taskify"
          className="w-[19.4rem] h-[ left-[0.01px] top-[-0.05px] mt-[3rem]"
        />
      </a>
      <div className="text-center text-zinc-800 text-[2rem] font-medium font-['Pretendard']">
        오늘도 만나서 반가워요!
      </div>
    </div>
  );
}
