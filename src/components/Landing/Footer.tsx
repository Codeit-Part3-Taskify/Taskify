import envelope from 'src/assets/images/envelope.svg';
import facebook from 'src/assets/images/facebook.svg';
import instagram from 'src/assets/images/instagram.svg';

export default function Footer() {
  return (
    <footer className="flex justify-between items-center w-screen text-gray_9FA6B2 text-[1.6rem] px-[14rem] py-[4rem]">
      <p>©codeit - 2023</p>
      <div className="flex gap-[3.2rem]">
        <p>Privacy Policy</p>
        <p>FAQ</p>
      </div>
      <div className="flex gap-[1.4rem]">
        <img src={envelope} alt="메일 아이콘" className="w-[2rem] h-[2rem]" />
        <img
          src={facebook}
          alt="페이스북 아이콘"
          className="w-[2rem] h-[2rem]"
        />
        <img
          src={instagram}
          alt="인스타그램 아이콘"
          className="w-[2rem] h-[2rem]"
        />
      </div>
    </footer>
  );
}
