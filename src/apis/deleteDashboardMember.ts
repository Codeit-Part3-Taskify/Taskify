import axiosInstance from 'src/apis/axiosInstance';
import { DashboardMembers } from 'src/types/api';

// 임시 토큰
const accessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTI3NCwidGVhbUlkIjoiMy01IiwiaWF0IjoxNzEwNTA5OTgzLCJpc3MiOiJzcC10YXNraWZ5In0.bs7A-8tp8FT9PcL1uIvbSQEJJpKEesjHZc8z280ZtCk';

const deleteDashboardMember = async (memberId: number) => {
  const { data } = await axiosInstance.delete<DashboardMembers>(
    `/members/${memberId}`,
    {
      headers: { Authorization: `Bearer ${accessToken}` }
    }
  );
  return data;
};

export default deleteDashboardMember;
