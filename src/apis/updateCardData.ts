import { PostCard } from 'src/types/cardTypes';
import axiosInstance from './axiosInstance';

export const updateCardData = async (cardId: number, body: PostCard) => {
  const { data } = await axiosInstance.put(`cards/${cardId}`, body);
  return data;
};
