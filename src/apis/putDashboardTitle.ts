import axiosInstance from 'src/apis/axiosInstance';
import { Dashboard } from 'src/types/dashboardTypes';

const putDashboardTitle = async (
  dashboardId: string | undefined,
  title: string,
  color: string
) => {
  const { data } = await axiosInstance.put<Dashboard>(
    `/dashboards/${dashboardId}`,
    {
      title,
      color
    }
  );
  return data;
};

export default putDashboardTitle;
