import { useEffect, useState } from 'react';
import { PAGENATION_SIZE } from 'src/constants/pagenation';
import { usePagenationDashboardMembers } from 'src/hooks/usePagenationDashboardMembers';
import PagenationButtons from '../Buttons/PagenationButtons';
import DashboardMemberList from './Lists/DashboardMemberList';

export default function EditDashboardMembers() {
  const {
    data,
    allPage,
    nowPage,
    handleBackwardButtonClick,
    handleForwardButtonClick,
    handleDeleteButtonClick
  } = usePagenationDashboardMembers();

  return (
    <section className=" pt-[2.9rem] pb-[0.4rem] bg-white rounded-[0.8rem] w-[62rem] h-[42.5rem]">
      <div className="flex items-center justify-between px-[2.8rem]">
        <h1 className="text-[2.4rem] font-bold">구성원</h1>
        <PagenationButtons
          allPage={allPage}
          nowPage={nowPage}
          handleBackwardButtonClick={handleBackwardButtonClick}
          handleForwardButtonClick={handleForwardButtonClick}
        />
      </div>
      <div className="text-[1.6rem] pt-[2.7rem]">
        <h2 className="px-[2.8rem] mb-[0.8rem] text-gray_9FA6B2">이름</h2>
        <DashboardMemberList
          members={data?.members}
          handleDeleteButtonClick={handleDeleteButtonClick}
        />
      </div>
    </section>
  );
}
