import axiosInstance from 'src/apis/axiosInstance';
import { PAGENATION_SIZE } from 'src/constants/pagenation';
import { DashboardInvitations } from 'src/types/api';
import handleError from 'src/utils/handleError';

const getDashboardInvitations = async (
  dashboardId: string | undefined,
  page: number
) => {
  try {
    const { data } = await axiosInstance.get<DashboardInvitations>(
      `/dashboards/${dashboardId}/invitations`,
      {
        params: {
          size: PAGENATION_SIZE.DASHBOARD.INVITATIONS,
          page
        }
      }
    );
    return data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export default getDashboardInvitations;
