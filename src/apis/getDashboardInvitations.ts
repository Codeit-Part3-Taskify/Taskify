import axios from 'src/apis/axiosInstance';
import { PAGENATION_SIZE } from 'src/constants/pagenation';
import { DashboardInvitations } from 'src/types/dashboardTypes';

const getDashboardInvitations = async (
  dashboardId: string | undefined,
  page: number
) => {
  const { data } = await axios.get<DashboardInvitations>(
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
