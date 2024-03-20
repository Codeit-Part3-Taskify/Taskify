import axiosInstance from 'src/apis/axios';
import { Dashboard } from 'src/types/api';

// 임시 토큰
const accessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTI3NCwidGVhbUlkIjoiMy01IiwiaWF0IjoxNzEwNTA5OTgzLCJpc3MiOiJzcC10YXNraWZ5In0.bs7A-8tp8FT9PcL1uIvbSQEJJpKEesjHZc8z280ZtCk';

const getDashboardDetails = async (dashboardId: string | undefined) => {
  const { data } = await axiosInstance.get<Dashboard>(
    `/dashboards/${dashboardId}`,
    {
      headers: { Authorization: `Bearer ${accessToken}` }
    }
  );
  return data;
};

export default getDashboardDetails;
