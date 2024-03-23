import axios from './axiosInstance';
import { DashboardsResponse } from '../types/dashboardTypes';

interface DashboardsRequest {
  title: string;
  color: string;
}

const createDashboards = async (
  body: DashboardsRequest
): Promise<DashboardsResponse> => {
  const { data } = await axios.post<DashboardsResponse>('dashboards', body);

  return data;
};

export default createDashboards;
