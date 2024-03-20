import { PostCard } from 'src/types/cardTypes';
import axiosInstance from './axios';
import { Authorization } from './readCardList';

export const createCard = async (body: PostCard) => {
  console.log(body);
  const { data } = await axiosInstance.post('cards', body, {
    headers: { Authorization }
  });
  return data;
};
