import editDashboardTitle from 'src/assets/images/edit-dashboard-title.png';
import invitationSettins from 'src/assets/images/invitation-settings.png';
import editDashboardMembers from 'src/assets/images/edit-members.png';

export default function OtherSections() {
  return (
    <div className="flex flex-col gap-[3.6rem] ">
      <h1 className="desktop:text-start text-center tablet:text-[2.8rem] text-[2.2rem] font-bold">
        생산성을 높이는 다양한 설정 ⚡️
      </h1>
      <div className="flex flex-col items-center desktop:flex-row desktop:justify-between desktop:gap-[1.5rem] tablet:gap-[4.8rem] gap-[4.05rem] desktop:max-w-[120rem] desktop:min-w-[100rem] desktop:w-[calc(100vw-72rem)]">
        <section className="bg-black_171717 rounded-[0.8rem] max-w-[37.8rem] w-[calc(100vw-3.2rem)] overflow-hidden">
          <div className="flex justify-center items-center bg-black_4B4B4B h-[26rem]">
            <img
              src={editDashboardTitle}
              alt="대시보드 제목 수정 이미지"
              className="tablet:w-[30rem] w-[26rem]"
            />
          </div>
          <div className="flex flex-col gap-[1.8rem] pl-[3.2rem] py-[3.3rem]">
            <h2 className="text-[1.8rem] font-bold">대시보드 설정</h2>
            <p className="text-[1.6rem]">
              대시보드 사진과 이름을 변경할 수 있어요.
            </p>
          </div>
        </section>
        <section className="bg-black_171717 rounded-[0.8rem] max-w-[37.8rem] w-[calc(100vw-3.2rem)] overflow-hidden">
          <div className="flex justify-center items-center bg-black_4B4B4B h-[26rem]">
            <img
              src={invitationSettins}
              alt="초대 내역 이미지"
              className="tablet:w-[30rem] w-[26rem]"
            />
          </div>
          <div className="flex flex-col gap-[1.8rem] pl-[3.2rem] py-[3.3rem]">
            <h2 className="text-[1.8rem] font-bold">초대</h2>
            <p className="text-[1.6rem]">새로운 팀원을 초대할 수 있어요.</p>
          </div>
        </section>
        <section className="bg-black_171717 rounded-[0.8rem] max-w-[37.8rem] w-[calc(100vw-3.2rem)] overflow-hidden">
          <div className="flex justify-center items-center bg-black_4B4B4B h-[26rem]">
            <img
              src={editDashboardMembers}
              alt="구성원 목록 이미지"
              className="tablet:w-[30rem] w-[26rem]"
            />
          </div>
          <div className="flex flex-col gap-[1.8rem] pl-[3.2rem] py-[3.3rem]">
            <h2 className="text-[1.8rem] font-bold">구성원</h2>
            <p className="text-[1.6rem]">구성원을 초대하고 내보낼 수 있어요.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
