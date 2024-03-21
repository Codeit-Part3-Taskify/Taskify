import type { PostColumn } from 'src/types/columnTypes';
import axios from './axiosInstance';

export const createColumn = async (body: PostColumn) => {
  const { data } = await axios.post('columns', body);
  return data;
};
