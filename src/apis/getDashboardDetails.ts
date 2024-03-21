import axiosInstance from 'src/apis/axiosInstance';
import { Dashboard } from 'src/types/dashboardTypes';

const getDashboardDetails = async (dashboardId: string | undefined) => {
  const { data } = await axiosInstance.get<Dashboard>(
    `/dashboards/${dashboardId}`
  );
  return data;
};

export default getDashboardDetails;
