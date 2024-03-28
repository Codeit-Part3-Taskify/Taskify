import ReturnButton from 'src/components/Buttons/ReturnButton';
import EditDashboardTitle from 'src/components/EditDashboard/EditDashboardTitle';
import EditDashboardMembers from 'src/components/EditDashboard/EditDashboardMembers';
import InvitationSettings from 'src/components/EditDashboard/InvitationSettings';
import Button from 'src/components/Buttons/Button';
import useDeleteDashboard from 'src/hooks/useDeleteDashboard';

export default function EditDashboardPage() {
  const { handleDashboardDeleteButtonClick } = useDeleteDashboard();

  return (
    <main className="tablet:mt-[2rem] tablet:ml-[2rem] mt-[1.7rem] ml-[1.2rem]">
      <ReturnButton />
      <article className="flex flex-col gap-[1.2rem] tablet:mt-[2.5rem] mt-[2.1rem] deaktop:mb-[5.6rem] tablet:mb-[4.8rem] mb-[2.4rem]">
        <EditDashboardTitle />
        <EditDashboardMembers />
        <InvitationSettings />
        <Button
          variant="ghost"
          type="button"
          customStyles="desktop:mt-[2.8rem] tablet:mt-[3.6rem] mobile:mt-[3.1rem] tablet:text-[1.8rem] text-[1.6rem] rounded-[0.8rem] font-medium] tablet:py-[2rem] py-[1.6rem] tablet:w-[32rem] w-[28.4rem]"
          onClick={handleDashboardDeleteButtonClick}
        >
          대시보드 삭제하기
        </Button>
      </article>
    </main>
  );
}
