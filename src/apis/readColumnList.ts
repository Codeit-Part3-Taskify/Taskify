import axiosInstance from './axiosInstance';

interface Props {
  queryKey: string | readonly unknown[];
}

const readColumnList = async ({ queryKey }: Props) => {
  const boardId = queryKey[1];
  const { data } = await axiosInstance.get(`columns?dashboardId=${boardId}`);
  return data;
};

export default readColumnList;
