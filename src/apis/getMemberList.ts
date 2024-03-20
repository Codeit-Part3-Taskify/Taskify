import type { MemberList } from 'src/types/memberTypes';
import axiosInstance from './axios';
import { Authorization } from './readCardList';

export const getMemberList = async (dashboardId: string) => {
  const { data } = await axiosInstance.get<MemberList>(
    `members?dashboardId=${Number(dashboardId)}`,
    {
      headers: { Authorization }
    }
  );
  return data;
};
