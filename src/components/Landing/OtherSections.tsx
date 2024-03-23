import editDashboardTitle from 'src/assets/images/edit-dashboard-title.png';
import invitationSettins from 'src/assets/images/invitation-settings.png';
import editDashboardMembers from 'src/assets/images/edit-members.png';

export default function OtherSections() {
  return (
    <div className="flex flex-col gap-[3.6rem]">
      <h1 className="text-[2.8rem] font-bold">
        생산성을 높이는 다양한 설정 ⚡️
      </h1>
      <div className="flex gap-[3.3rem]">
        <section className="bg-black_171717 rounded-[0.8rem] w-[37.8rem] overflow-hidden">
          <div className="flex justify-center items-center bg-black_4B4B4B h-[26rem]">
            <img
              src={editDashboardTitle}
              alt="대시보드 제목 수정 이미지"
              className="w-[30rem]"
            />
          </div>
          <div className="flex flex-col gap-[1.8rem] pl-[3.2rem] py-[3.3rem]">
            <h2 className="text-[1.8rem]">대시보드 설정</h2>
            <p className="text-[1.6rem]">
              대시보드 사진과 이름을 변경할 수 있어요.
            </p>
          </div>
        </section>
        <section className="bg-black_171717 rounded-[0.8rem] w-[37.8rem] overflow-hidden">
          <div className="flex justify-center items-center bg-black_4B4B4B h-[26rem]">
            <img
              src={invitationSettins}
              alt="초대 내역 이미지"
              className="w-[30rem]"
            />
          </div>
          <div className="flex flex-col gap-[1.8rem] pl-[3.2rem] py-[3.3rem]">
            <h2 className="text-[1.8rem]">초대</h2>
            <p className="text-[1.6rem]">새로운 팀원을 초대할 수 있어요.</p>
          </div>
        </section>
        <section className="bg-black_171717 rounded-[0.8rem] w-[37.8rem] overflow-hidden">
          <div className="flex justify-center items-center bg-black_4B4B4B h-[26rem]">
            <img
              src={editDashboardMembers}
              alt="구성원 목록 이미지"
              className="w-[30rem]"
            />
          </div>
          <div className="flex flex-col gap-[1.8rem] pl-[3.2rem] py-[3.3rem]">
            <h2 className="text-[1.8rem]">구성원</h2>
            <p className="text-[1.6rem]">구성원을 초대하고 내보낼 수 있어요.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
