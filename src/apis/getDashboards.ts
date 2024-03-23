import { DashboardsResponse } from '../types/dashboardTypes';
import axios from './axiosInstance';

const getDashboards = async (
  page: number,
  pageSize: number,
  navigationMethod: string = 'pagination'
): Promise<DashboardsResponse> => {
  const dashboardsURL = `dashboards?navigationMethod=${navigationMethod}`;

  const { data } = await axios.get<DashboardsResponse>(dashboardsURL, {
    params: {
      size: pageSize,
      page
    }
  });

  return data;
};

export default getDashboards;
