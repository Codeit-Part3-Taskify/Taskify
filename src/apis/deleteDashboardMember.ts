import axios from 'src/apis/axiosInstance';
import { DashboardMembers } from 'src/types/dashboardTypes';

const deleteDashboardMember = async (memberId: number) => {
  const { data } = await axios.delete<DashboardMembers>(
    `/members/${memberId}`
  );
  return data;
};

export default deleteDashboardMember;
