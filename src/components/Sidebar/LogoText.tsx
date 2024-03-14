export default function LogoText() {
  return (
    <div className="pb-[3.8rem] cursor-pointer flex items-center justify-center tablet:pb-[6rem] desktop:justify-start">
      <img
        className="w-[2.3rem] h-[2.7rem]"
        src="/images/logo.svg"
        alt="홈으로 가는 Taskify 로고"
      />
      <img
        className="w-[8rem] h-[2.2rem] mobile:hidden tablet:inline"
        src="/images/Taskify.svg"
        alt="홈으로 가는 Taskify 텍스트"
      />
    </div>
  );
}
