import { useState } from 'react';
import PagenationButtons from '../Buttons/PagenationButtons';
import DashboardMemberList from './Lists/DashboardMemberList';

export default function EditDashboardMembers() {
  const [members, setMembers] = useState<string[]>([
    '김율민',
    '최무현',
    '박준수',
    '윤해용'
  ]); // 임시 데이터

  return (
    <section className=" pt-[2.9rem] pb-[0.4rem] bg-white_FFFFFF rounded-[0.8rem] w-[62rem]">
      <div className="flex items-center justify-between px-[2.8rem]">
        <h1 className="text-[2.4rem] font-bold">구성원</h1>
        <PagenationButtons />
      </div>
      <div className="text-[1.6rem] pt-[2.7rem]">
        <h2 className="px-[2.8rem] mb-[0.8rem] text-gray_9FA6B2">이름</h2>
        <DashboardMemberList members={members} />
      </div>
    </section>
  );
}
