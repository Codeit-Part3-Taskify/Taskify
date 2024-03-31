import BackwardIcon from 'src/assets/images/arrow-backward-white.svg';
import ForwardIcon from 'src/assets/images/arrow-forward-white.svg';
import Button from './Button';

interface PagenationButtonsProps {
  allPage: number;
  nowPage: number;
  handleBackwardButtonClick: () => void;
  handleForwardButtonClick: () => void;
  isSidebar?: boolean;
  isStart?: boolean;
  isEnd?: boolean;
}

export default function PagenationButtons({
  allPage,
  nowPage,
  handleBackwardButtonClick,
  handleForwardButtonClick,
  isSidebar,
  isStart,
  isEnd
}: PagenationButtonsProps) {
  const contatinerStyle = isSidebar
    ? 'flex tablet:flex-col-reverse items-center desktop:gap-[1.6rem] tablet:gap-[1.4rem] gap-[1.2rem]'
    : 'flex items-center tablet:gap-[1.6rem] gap-[1.2rem]';
  const buttonStyle = isSidebar
    ? 'tablet:w-[4rem] w-[2rem] tablet:h-[4rem] h-[2rem]'
    : 'tablet:w-[4rem] w-[3.6rem] tablet:h-[4rem] h-[3.6rem]';
  const spanStyle = isSidebar
    ? 'tablet:text-[1.4rem] hidden tablet:block'
    : 'tablet:text-[1.4rem] text-[1.2rem]';

  return (
    <div className={contatinerStyle}>
      <span className={spanStyle}>
        {allPage} 페이지 중 {nowPage}
      </span>
      <div className="flex items-center">
        <Button
          variant="secondary"
          customStyles={
            isStart
              ? `${buttonStyle} rounded-l-[0.4rem] shadow opacity-30`
              : `${buttonStyle} rounded-l-[0.4rem] shadow`
          }
          type="button"
          onClick={handleBackwardButtonClick}
        >
          <img src={BackwardIcon} alt="뒤로 가기 아이콘" />
        </Button>
        <Button
          variant="secondary"
          customStyles={
            isEnd
              ? `${buttonStyle} rounded-r-[0.4rem] shadow opacity-30`
              : `${buttonStyle} rounded-r-[0.4rem] shadow`
          }
          type="button"
          onClick={handleForwardButtonClick}
        >
          <img src={ForwardIcon} alt="앞으로 가기 아이콘" />
        </Button>
      </div>
    </div>
  );
}
