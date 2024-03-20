import axiosInstance from 'src/apis/axiosInstance';
import { Dashboard } from 'src/types/api';
import handleError from 'src/utils/handleError';

const postDashboardInvitations = async (
  dashboardId: string | undefined,
  email: string
) => {
  try {
    const { data } = await axiosInstance.post<Dashboard>(
      `/dashboards/${dashboardId}/invitations`,
      {
        email
      }
    );
    return data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export default postDashboardInvitations;
