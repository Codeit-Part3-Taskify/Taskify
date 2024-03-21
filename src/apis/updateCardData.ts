import { PostCard } from 'src/types/cardTypes';
import axiosInstance from './axios';
import { Authorization } from './readCardList';

export const updateCardData = async (cardId: number, body: PostCard) => {
  const { data } = await axiosInstance.put(`cards/${cardId}`, body, {
    headers: { Authorization }
  });
  return data;
};
