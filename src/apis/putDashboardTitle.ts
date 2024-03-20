import axiosInstance from 'src/apis/axiosInstance';
import { Dashboard } from 'src/types/dashboardTypes';

// 임시 토큰
const accessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTI3NCwidGVhbUlkIjoiMy01IiwiaWF0IjoxNzEwNTA5OTgzLCJpc3MiOiJzcC10YXNraWZ5In0.bs7A-8tp8FT9PcL1uIvbSQEJJpKEesjHZc8z280ZtCk';

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
    },
    {
      headers: { Authorization: `Bearer ${accessToken}` }
    }
  );
  return data;
};

export default putDashboardTitle;
