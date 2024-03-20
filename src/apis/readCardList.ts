import axiosInstance from './axiosInstance';

interface Props {
  queryKey: string | readonly unknown[];
}

const readCardList = async ({ queryKey }: Props) => {
  const columnId = queryKey[1];
  const { data } = await axiosInstance.get(`cards?columnId=${columnId}`);
  return data;
};

export default readCardList;
