import axiosInstance from './axios';
import { Authorization } from './readCardList';

// 임시
// react-query과 관련이 없도록 사용
const readCardDetail = async (cardId: number) => {
  const { data } = await axiosInstance.get(`cards/${cardId}`, {
    headers: { Authorization }
  });
  return data;
};

export default readCardDetail;
