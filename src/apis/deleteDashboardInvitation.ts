import axios from 'src/apis/axiosInstance';

import { DashboardInvitations } from 'src/types/dashboardTypes';

const deleteDashboardInvitation = async (
  dashboardId: string | undefined,
  invitationId: number
) => {
  const { data } = await axios.delete<DashboardInvitations>(
    `/dashboards/${dashboardId}/invitations/${invitationId}`
  );
  return data;
};

export default deleteDashboardInvitation;
