import axiosInstance from './axiosInstance';
import { Authorization } from './readCardList';

interface Props {
  queryKey: string | readonly unknown[];
}

const readColumnList = async ({ queryKey }: Props) => {
  const boardId = queryKey[1];
  const { data } = await axiosInstance.get(`columns?dashboardId=${boardId}`, {
    headers: { Authorization }
  });
  return data;
};

export default readColumnList;
