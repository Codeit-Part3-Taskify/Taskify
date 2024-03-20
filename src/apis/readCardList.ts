import axiosInstance from './axiosInstance';

// 임시
export const Authorization =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTI2NCwidGVhbUlkIjoiMy01IiwiaWF0IjoxNzEwNDkxNzU2LCJpc3MiOiJzcC10YXNraWZ5In0.ok4Qv3OQeQzq_R6wJf2upY44DE4wa2EIvf6e3ix7iMY';

interface Props {
  queryKey: string | readonly unknown[];
}

const readCardList = async ({ queryKey }: Props) => {
  const columnId = queryKey[1];
  const { data } = await axiosInstance.get(`cards?columnId=${columnId}`, {
    headers: { Authorization }
  });
  return data;
};

export default readCardList;
