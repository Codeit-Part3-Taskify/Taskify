import axios from 'src/apis/axiosInstance';
import { DashboardMembers } from 'src/types/dashboardTypes';

const getDashboardMembers = async (
  dashboardId: string | undefined,
  page?: number,
  size?: number
) => {
  const { data } = await axios.get<DashboardMembers>('/members', {
    params: {
      page,
      size,
      dashboardId
    }
  });
  return data;
};

export default getDashboardMembers;
