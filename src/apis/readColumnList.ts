import axiosInstance from './axiosInstance';

const readColumnList = async (boardId: string) => {
  const { data } = await axiosInstance.get(`columns?dashboardId=${boardId}`);
  return data;
};

export default readColumnList;
