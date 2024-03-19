import axiosInstance from './axiosInstance';

// 임시
export const Authorization =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTI3NCwidGVhbUlkIjoiMy01IiwiaWF0IjoxNzEwNTA5OTgzLCJpc3MiOiJzcC10YXNraWZ5In0.bs7A-8tp8FT9PcL1uIvbSQEJJpKEesjHZc8z280ZtCk';

interface Props {
  queryKey: [string, number];
}

const readCardList = async ({ queryKey: [, columnId] }: Props) => {
  const { data } = await axiosInstance.get(`cards?columnId=${columnId}`, {
    headers: { Authorization }
  });
  return data;
};

export default readCardList;
