import axios from './axiosInstance';

const readCommentList = async (cardId: number, pageParam: number = 0) => {
  const { data } = await axios.get(
    `comments?cardId=${cardId}&size=${2}&${pageParam && `cursorId=${pageParam}`}`
  );
  return data;
};

export default readCommentList;
