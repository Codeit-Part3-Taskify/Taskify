import axios from './axiosInstance';

export const deleteColumn = async (columnId: number) => {
  const { data } = await axios.delete(`columns/${columnId}`);
  return data;
};
