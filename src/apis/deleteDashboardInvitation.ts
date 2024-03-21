import axiosInstance from 'src/apis/axiosInstance';
import { DashboardInvitations } from 'src/types/api';

const deleteDashboardInvitation = async (
  dashboardId: string | undefined,
  invitationId: number
) => {
  const { data } = await axiosInstance.delete<DashboardInvitations>(
    `/dashboards/${dashboardId}/invitations/${invitationId}`
  );
  return data;
};

export default deleteDashboardInvitation;
