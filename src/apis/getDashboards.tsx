import axios from './axiosInstance';
import { DashboardsResponse } from '../types/api';

// 임시 토큰
const accessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTI3NCwidGVhbUlkIjoiMy01IiwiaWF0IjoxNzEwNTA5OTgzLCJpc3MiOiJzcC10YXNraWZ5In0.bs7A-8tp8FT9PcL1uIvbSQEJJpKEesjHZc8z280ZtCk';

const getDashboards = async (
  page?: number,
  size?: number,
  navigationMethod: string = 'infiniteScroll'
): Promise<DashboardsResponse> => {
  let dashboardsURL = `/dashboards?navigationMethod=${navigationMethod}`;

  if (page && size) {
    dashboardsURL = `${dashboardsURL}&page=${page}&size=${size}`;
  }

  const { data } = await axios.get<DashboardsResponse>(dashboardsURL, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`
    }
  });

  return data;
};

export default getDashboards;
