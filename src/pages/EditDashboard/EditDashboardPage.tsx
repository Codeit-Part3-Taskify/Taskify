import ReturnButton from 'src/components/Buttons/ReturnButton';
import EditDashboardTitle from 'src/components/EditDashboard/EditDashboardTitle';
import EditDashboardMembers from 'src/components/EditDashboard/EditDashboardMembers';
import InvitationSettings from 'src/components/EditDashboard/InvitationSettings';
import Button from 'src/components/Buttons/Button';

export default function EditDashboardPage() {
  return (
    <main className="mt-[2rem] ml-[2rem]">
      <ReturnButton />
      <article className="flex flex-col gap-[1.2rem] mt-[2.5rem] mb-[4rem]">
        <EditDashboardTitle />
        <EditDashboardMembers />
        <InvitationSettings />
      </article>
      <Button
        variant="ghost"
        type="button"
        customStyles="px-[9.5rem] py-[2rem] text-[1.8rem] rounded-[0.8rem] mb-[5.6rem]"
      >
        대시보드 삭제하기
      </Button>
    </main>
  );
}
