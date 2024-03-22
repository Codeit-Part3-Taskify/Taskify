import { PAGENATION_SIZE } from 'src/constants/pagenation';
import { DashboardsResponse } from '../types/dashboardTypes';
import axios from './axiosInstance';

const getDashboards = async (
  page: number,
  navigationMethod: string = 'pagination'
): Promise<DashboardsResponse> => {
  const dashboardsURL = `dashboards?navigationMethod=${navigationMethod}`;

  const { data } = await axios.get<DashboardsResponse>(dashboardsURL, {
    params: {
      size: PAGENATION_SIZE.DASHBOARD.SIDEBAR,
      page
    }
  });

  return data;
};

export default getDashboards;
