import { Params, useNavigate, useParams } from 'react-router-dom';
import BackwardIcon from 'src/assets/images/arrow-backward-black.svg';

export default function ReturnButton() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(-1); // 바로 이전 페이지로 이동
  };

  return (
    <button
      className="flex items-center desktop:text-[1.6rem] mobile:text-[1.4rem] font-medium"
      type="button"
      onClick={handleButtonClick}
    >
      <img
        className="tablet:w-[2rem] tablet:h-[2rem] w-[1.8rem] h-[1.8rem]"
        src={BackwardIcon}
        alt="뒤로가기 아이콘"
      />
      돌아가기
    </button>
  );
}
