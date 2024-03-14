import ReturnButton from '../Buttons/ReturnButton';
import EditDashboard from '../EditDashboard/EditDashboard';
import EditMembers from '../EditDashboard/EditMembers';
import InvitationSettings from '../EditDashboard/InvitationSettings';

export default function EditDashboardLayout() {
  return (
    <div className="bg-gray_FAFAFA w-[100%]">
      <div className="mt-[2rem] ml-[2rem]">
        <ReturnButton />
        <article className="flex flex-col gap-[1.2rem] mt-[2.5rem]">
          <EditDashboard />
          <EditMembers />
          <InvitationSettings />
        </article>
      </div>
    </div>
  );
}
