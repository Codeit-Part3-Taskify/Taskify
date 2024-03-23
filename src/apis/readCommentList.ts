import axios from './axiosInstance';

const readCommentList = async (cardId: number) => {
  const { data } = await axios.get(`comments?cardId=${cardId}`);
  return data;
};

export default readCommentList;
