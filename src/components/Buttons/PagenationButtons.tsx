import { useState } from 'react';
import BackwardIcon from 'src/assets/images/arrow-backward-white.svg';
import ForwardIcon from 'src/assets/images/arrow-forward-white.svg';
import Button from './Button';

export default function PagenationButtons() {
  const [allPage, setAllPage] = useState(10);
  const [nowPage, setNowPage] = useState(1); // Page 값들은 임시로 만들어 두었습니다. 추후에 api 연동해서 페이지네이션 구현 시 설정해줘야 합니다.

  const handleBackwardButtonClick = () => {
    if (nowPage === 1) {
      return;
    }
    setNowPage(nowPage - 1);
  };

  const handleForwardButtonClick = () => {
    if (nowPage === allPage) {
      return;
    }
    setNowPage(nowPage + 1);
  };

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
