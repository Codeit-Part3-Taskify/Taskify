import { useState } from 'react';
import Button from '../../Layout/Button';

export default function PagenationButtons() {
  const [allPage, setAllPage] = useState(1);
  const [nowPage, setNowPage] = useState(1);

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
    <div className="flex items-center gap-4">
      <span>
        {allPage} 페이지 중 {nowPage}
      </span>
      <div className="flex items-center">
        <Button
          className="flex items-center justify-center w-10 h-10 bg-white border rounded-tl-md rounded-bl-md border-gray_D9D9D9"
          type="button"
          appendix={
            <img src="./images/arrow-backward.svg" alt="뒤로 가기 아이콘" />
          }
          onClick={handleBackwardButtonClick}
        />
        <Button
          className="flex items-center justify-center w-10 h-10 bg-white border rounded-tr-md rounded-br-md border-gray_D9D9D9"
          type="button"
          appendix={
            <img src="./images/arrow-forward.svg" alt="앞으로 가기 아이콘" />
          }
          onClick={handleForwardButtonClick}
        />
      </div>
    </div>
  );
}
