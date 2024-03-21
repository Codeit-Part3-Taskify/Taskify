import type { PostColumn } from 'src/types/columnTypes';
import axiosInstance from './axiosInstance';

export const createColumn = async (body: PostColumn) => {
  const { data } = await axiosInstance.post('columns', body);
  return data;
};
