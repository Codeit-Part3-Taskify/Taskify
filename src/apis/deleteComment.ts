import axios from './axiosInstance';

const deleteComment = async (commentId: number) => {
  const { data } = await axios.delete(`comments/${commentId}`);
  return data;
};

export default deleteComment;
