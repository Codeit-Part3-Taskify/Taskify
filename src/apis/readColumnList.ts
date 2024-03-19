import axiosInstance from './axiosInstance';
import { Authorization } from './readCardList';

interface Props {
  queryKey: [string, string | undefined];
}

const readColumnList = async ({ queryKey: [, boardId] }: Props) => {
  const { data } = await axiosInstance.get(`columns?dashboardId=${boardId}`, {
    headers: { Authorization }
  });
  return data;
};

export default readColumnList;
