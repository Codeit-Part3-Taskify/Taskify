import axiosInstance from 'src/apis/axiosInstance';
import { Dashboard } from 'src/types/api';
import handleError from 'src/utils/handleError';

const getDashboardDetails = async (dashboardId: string | undefined) => {
  try {
    const { data } = await axiosInstance.get<Dashboard>(
      `/dashboards/${dashboardId}`
    );
    return data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export default getDashboardDetails;
