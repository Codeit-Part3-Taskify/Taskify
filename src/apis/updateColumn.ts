import axios from './axiosInstance';

export const updateColumn = async (value: string, columnId: number) => {
  const { data } = await axios.put(`/columns/${columnId}`, {
    title: value
  });
  return data;
};
