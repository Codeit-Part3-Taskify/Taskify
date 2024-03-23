import axios from './axiosInstance';

const updateComment = async (commentId: number, content: string) => {
  const { data } = await axios.put(`comments/${commentId}`, { content });
  return data;
};

export default updateComment;
