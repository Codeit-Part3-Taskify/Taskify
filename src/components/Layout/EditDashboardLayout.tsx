import ReturnButton from '../Buttons/ReturnButton';
import EditDashboardTitle from '../EditDashboard/EditDashboardTitle';
import EditDashboardMembers from '../EditDashboard/EditDashboardMembers';
import InvitationSettings from '../EditDashboard/InvitationSettings';

export default function EditDashboardLayout() {
  return (
    <div className="bg-gray_FAFAFA w-[100%]">
      <div className="mt-[2rem] ml-[2rem]">
        <ReturnButton />
        <article className="flex flex-col gap-[1.2rem] mt-[2.5rem] mb-[4rem]">
          <EditDashboardTitle />
          <EditDashboardMembers />
          <InvitationSettings />
        </article>
        <button className="px-[9.5rem] py-[2rem] text-[1.8rem] border border-gray_D9D9D9 rounded-[0.8rem] mb-[5.6rem]">
          대시보드 삭제하기
        </button>
      </div>
    </div>
  );
}
