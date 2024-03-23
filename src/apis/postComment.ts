import { CommentBody } from 'src/types/commentTypes';
import axios from './axiosInstance';

const postComment = async (body: CommentBody) => {
  const { data } = await axios.post('comments', body);
  return data;
};

export default postComment;
