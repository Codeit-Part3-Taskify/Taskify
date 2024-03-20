import BackwardIcon from 'src/assets/images/arrow-backward-white.svg';
import ForwardIcon from 'src/assets/images/arrow-forward-white.svg';
import Button from './Button';

interface PagenationButtonsProps {
  allPage: number;
  nowPage: number;
  handleBackwardButtonClick: () => void;
  handleForwardButtonClick: () => void;
}

export default function PagenationButtons({
  allPage,
  nowPage,
  handleBackwardButtonClick,
  handleForwardButtonClick
}: PagenationButtonsProps) {
  return (
    <div className="flex items-center gap-[1.6rem]">
      <span className="text-[1.6rem]">
        {allPage} 페이지 중 {nowPage}
      </span>
      <div className="flex items-center">
        <Button
          variant="secondary"
          customStyles="w-[4rem] h-[4rem] rounded-l-[0.4rem]"
          type="button"
          onClick={handleBackwardButtonClick}
        >
          <img src={BackwardIcon} alt="뒤로 가기 아이콘" />
        </Button>
        <Button
          variant="secondary"
          customStyles="w-[4rem] h-[4rem] rounded-r-[0.4rem]"
          type="button"
          onClick={handleForwardButtonClick}
        >
          <img className="" src={ForwardIcon} alt="앞으로 가기 아이콘" />
        </Button>
      </div>
    </div>
  );
}
