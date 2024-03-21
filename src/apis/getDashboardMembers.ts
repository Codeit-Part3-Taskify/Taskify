import axiosInstance from 'src/apis/axiosInstance';
import { PAGENATION_SIZE } from 'src/constants/pagenation';
import { DashboardMembers } from 'src/types/dashboardTypes';

const getDashboardMembers = async (
  dashboardId: string | undefined,
  page: number
) => {
  const { data } = await axiosInstance.get<DashboardMembers>('/members', {
    params: {
      page,
      size: PAGENATION_SIZE.DASHBOARD.MEMBERS,
      dashboardId
    }
  });
  return data;
};

export default getDashboardMembers;
