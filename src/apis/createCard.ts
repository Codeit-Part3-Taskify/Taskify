import { PostCard } from 'src/types/cardTypes';
import axios from './axiosInstance';

export const createCard = async (body: PostCard) => {
  const { data } = await axios.post('cards', body);
  return data;
};
