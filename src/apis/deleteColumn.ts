import axiosInstance from './axiosInstance';
import { Authorization } from './readCardList';

export const deleteColumn = async (columnId: number ) => {
  const { data } = await axiosInstance.delete(`columns/${columnId}`, {
    headers: { Authorization }
  });
  return data;
};
