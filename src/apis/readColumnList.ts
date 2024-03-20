import axiosInstance from './axiosInstance';
import { Authorization } from './readCardList';

const readColumnList = async (boardId: string) => {
  const { data } = await axiosInstance.get(`columns?dashboardId=${boardId}`, {
    headers: { Authorization }
  });
  return data;
};

export default readColumnList;
