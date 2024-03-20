import axiosInstance from './axios';
import { Authorization } from './readCardList';

export const updateColumn = async (value: string, columnId: number) => {
  const { data } = await axiosInstance.put(
    `/columns/${columnId}`,
    {
      title: value
    },
    {
      headers: { Authorization }
    }
  );
  return data;
};
