import type { MemberData } from 'src/types/memberTypes';
import axios from './axiosInstance';

export const getMyInfo = async () => {
  const { data } = await axios.get<MemberData>('/users/me');
  return data;
};
