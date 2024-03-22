import type { MemberList } from 'src/types/memberTypes';
import axios from './axiosInstance';

export const getMemberList = async (dashboardId: string) => {
  const { data } = await axios.get<MemberList>(
    `members?dashboardId=${Number(dashboardId)}`
  );
  return data;
};
