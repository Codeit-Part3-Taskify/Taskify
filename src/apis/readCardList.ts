import axiosInstance from './axiosInstance';

// 임시
export const Authorization =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTI3NCwidGVhbUlkIjoiMy01IiwiaWF0IjoxNzEwNTA5OTgzLCJpc3MiOiJzcC10YXNraWZ5In0.bs7A-8tp8FT9PcL1uIvbSQEJJpKEesjHZc8z280ZtCk';

// react-query과 관련이 없도록 사용
const readCardList = async (columnId: number) => {
  const { data } = await axiosInstance.get(`cards?columnId=${columnId}`, {
    headers: { Authorization }
  });
  return data;
};

export default readCardList;
