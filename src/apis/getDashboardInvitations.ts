import axiosInstance from 'src/apis/axiosInstance';
import { PAGENATION_SIZE } from 'src/constants/pagenation';
import { DashboardInvitations } from 'src/types/api';

// 임시 토큰
const accessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTI3NCwidGVhbUlkIjoiMy01IiwiaWF0IjoxNzEwNTA5OTgzLCJpc3MiOiJzcC10YXNraWZ5In0.bs7A-8tp8FT9PcL1uIvbSQEJJpKEesjHZc8z280ZtCk';

const getDashboardInvitations = async (
  dashboardId: string | undefined,
  page: number
) => {
  const { data } = await axiosInstance.get<DashboardInvitations>(
    `/dashboards/${dashboardId}/invitations`,
    {
      params: {
        size: PAGENATION_SIZE.DASHBOARD.INVITATIONS,
        page
      },
      headers: { Authorization: `Bearer ${accessToken}` }
    }
  );
  return data;
};

export default getDashboardInvitations;
