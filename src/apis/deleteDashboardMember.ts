import axiosInstance from 'src/apis/axiosInstance';
import { DashboardMembers } from 'src/types/api';
import handleError from 'src/utils/handleError';

const deleteDashboardMember = async (memberId: number) => {
  try {
    const { data } = await axiosInstance.delete<DashboardMembers>(
      `/members/${memberId}`
    );
    return data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export default deleteDashboardMember;
