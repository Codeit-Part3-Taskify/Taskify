import { useEffect, useState } from 'react';
import { usePagenationDashboardMembers } from 'src/hooks/usePagenationDashboardMembers';
import PagenationButtons from '../Buttons/PagenationButtons';
import DashboardMemberList from './Lists/DashboardMemberList';

export default function EditDashboardMembers() {
  const {
    data,
    isLoading,
    allPage,
    nowPage,
    handleBackwardButtonClick,
    handleForwardButtonClick,
    handleDeleteButtonClick
  } = usePagenationDashboardMembers();

  const [displayData, setDisplayData] = useState(data);

  useEffect(() => {
    if (!isLoading) {
      setDisplayData(data);
    }
  }, [data, isLoading]);

  return (
    <section className="pt-[2.2rem] tablet:pt-[2.6rem] pb-[0.4rem] bg-white rounded-[0.8rem] desktop:w-[62rem] tablet:w-[54.4rem] mobile:w-[28.4rem] tablet:h-[42rem] h-[35rem]">
      <div className="flex items-center justify-between tablet:px-[2.8rem] px-[2rem]">
        <h1 className="tablet:text-[2.4rem] text-[2rem] font-bold">구성원</h1>
        <PagenationButtons
          allPage={allPage}
          nowPage={nowPage}
          handleBackwardButtonClick={handleBackwardButtonClick}
          handleForwardButtonClick={handleForwardButtonClick}
        />
      </div>
      <div className="text-[1.6rem] tablet:pt-[2.8rem] pt-[1.8rem]">
        <h2 className="px-[2.8rem] mb-[0.8rem] text-gray_9FA6B2 text-[1.4rem] tablet:text-[1.6rem]">
          이름
        </h2>
        <DashboardMemberList
          members={displayData?.members}
          handleDeleteButtonClick={handleDeleteButtonClick}
        />
      </div>
    </section>
  );
}
