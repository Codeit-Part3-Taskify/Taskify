import ReturnButton from 'src/components/Buttons/ReturnButton';
import EditDashboardTitle from 'src/components/EditDashboard/EditDashboardTitle';
import EditDashboardMembers from 'src/components/EditDashboard/EditDashboardMembers';
import InvitationSettings from 'src/components/EditDashboard/InvitationSettings';
import Button from 'src/components/Buttons/Button';
import useDeleteDashboard from 'src/hooks/useDeleteDashboard';

export default function EditDashboardPage() {
  const { handleDashboardDeleteButtonClick } = useDeleteDashboard();

  return (
    <main className="mt-[2rem] ml-[2rem]">
      <ReturnButton />
      <article className="flex flex-col gap-[1.2rem] mt-[2.5rem] mb-[5.6rem]">
        <EditDashboardTitle />
        <EditDashboardMembers />
        <InvitationSettings />
        <Button
          variant="ghost"
          type="button"
          customStyles="w-[32rem] h-[6.2rem] mt-[2.8rem] text-[1.8rem] rounded-[0.8rem] font-medium"
          onClick={handleDashboardDeleteButtonClick}
        >
          대시보드 삭제하기
        </Button>
      </article>
    </main>
  );
}
