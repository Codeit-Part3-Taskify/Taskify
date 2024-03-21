import axiosInstance from './axiosInstance';

export const updateColumn = async (value: string, columnId: number) => {
  const { data } = await axiosInstance.put(`/columns/${columnId}`, {
    title: value
  });
  return data;
};
