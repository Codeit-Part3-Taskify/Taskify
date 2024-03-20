import { PostCard } from 'src/types/cardTypes';
import axiosInstance from './axiosInstance';

export const createCard = async (body: PostCard) => {
  const { data } = await axiosInstance.post('cards', body);
  return data;
};
