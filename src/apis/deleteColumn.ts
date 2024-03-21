import axiosInstance from './axiosInstance';

export const deleteColumn = async (columnId: number) => {
  const { data } = await axiosInstance.delete(`columns/${columnId}`);
  return data;
};
