import axios from './axiosInstance';
import { DashboardsResponse } from '../types/dashboardTypes';

const getDashboards = async (
  page?: number,
  size?: number,
  navigationMethod: string = 'infiniteScroll'
): Promise<DashboardsResponse> => {
  let dashboardsURL = `dashboards?navigationMethod=${navigationMethod}`;

  if (page && size) {
    dashboardsURL = `${dashboardsURL}&page=${page}&size=${size}`;
  }

  const { data } = await axios.get<DashboardsResponse>(dashboardsURL);

  return data;
};

export default getDashboards;
