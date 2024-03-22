import axios from './axiosInstance';

// 임시
// react-query과 관련이 없도록 사용
const readCardDetail = async (cardId: number) => {
  const { data } = await axios.get(`cards/${cardId}`);
  return data;
};

export default readCardDetail;
