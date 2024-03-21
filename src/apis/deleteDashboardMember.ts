import axiosInstance from 'src/apis/axiosInstance';
import { DashboardMembers } from 'src/types/api';

const deleteDashboardMember = async (memberId: number) => {
  const { data } = await axiosInstance.delete<DashboardMembers>(
    `/members/${memberId}`
  );
  return data;
};

export default deleteDashboardMember;
