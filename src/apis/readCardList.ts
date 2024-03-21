import axios from './axiosInstance';

// react-query과 관련이 없도록 사용
const readCardList = async (columnId: number) => {
  const { data } = await axios.get(`cards?columnId=${columnId}`);
  return data;
};

export default readCardList;
