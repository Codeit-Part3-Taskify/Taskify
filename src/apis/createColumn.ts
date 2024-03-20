import type { PostColumn } from 'src/types/columnTypes';
import axiosInstance from './axiosInstance';
import { Authorization } from './readCardList';

export const createColumn = async (body: PostColumn) => {
  const { data } = await axiosInstance.post('columns', body, {
    headers: { Authorization }
  });
  return data;
};
