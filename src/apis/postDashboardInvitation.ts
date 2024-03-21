import axiosInstance from 'src/apis/axiosInstance';
import { Dashboard } from 'src/types/dashboardTypes';

const postDashboardInvitations = async (
  dashboardId: string | undefined,
  email: string
) => {
  const { data } = await axiosInstance.post<Dashboard>(
    `/dashboards/${dashboardId}/invitations`,
    {
      email
    }
  );
  return data;
};

export default postDashboardInvitations;
