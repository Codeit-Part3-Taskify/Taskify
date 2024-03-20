import axiosInstance from 'src/apis/axiosInstance';
import { PAGENATION_SIZE } from 'src/constants/pagenation';
import { DashboardMembers } from 'src/types/api';
import handleError from 'src/utils/handleError';

const getDashboardMembers = async (
  dashboardId: string | undefined,
  page: number
) => {
  try {
    const { data } = await axiosInstance.get<DashboardMembers>('/members', {
      params: {
        page,
        size: PAGENATION_SIZE.DASHBOARD.MEMBERS,
        dashboardId
      }
    });
    return data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export default getDashboardMembers;
