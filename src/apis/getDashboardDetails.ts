import axios from 'src/apis/axiosInstance';
import { Dashboard } from 'src/types/dashboardTypes';

const getDashboardDetails = async (dashboardId: string | undefined) => {
  const { data } = await axios.get<Dashboard>(`/dashboards/${dashboardId}`);
  return data;
};

export default getDashboardDetails;
