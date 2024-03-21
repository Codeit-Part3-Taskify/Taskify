import axiosInstance from 'src/apis/axiosInstance';
import { PAGENATION_SIZE } from 'src/constants/pagenation';
import { DashboardInvitations } from 'src/types/dashboardTypes';

const getDashboardInvitations = async (
  dashboardId: string | undefined,
  page: number
) => {
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
};

export default getDashboardInvitations;
