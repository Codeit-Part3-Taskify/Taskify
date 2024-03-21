import axios from './axiosInstance';
import { DashboardsResponse } from '../types/dashboardTypes';

// 임시 토큰
const accessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTI3NCwidGVhbUlkIjoiMy01IiwiaWF0IjoxNzEwNTA5OTgzLCJpc3MiOiJzcC10YXNraWZ5In0.bs7A-8tp8FT9PcL1uIvbSQEJJpKEesjHZc8z280ZtCk';

interface DashboardsRequest {
  title: string;
  color: string;
}

const createDashboards = async (
  body: DashboardsRequest
): Promise<DashboardsResponse> => {
  const { data } = await axios.post<DashboardsResponse>('dashboards', body, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`
    }
  });

  return data;
};

export default createDashboards;
