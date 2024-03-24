import { PutCard } from 'src/types/cardTypes';
import axiosInstance from './axiosInstance';

export const updateCardData = async (cardId: number, body: PutCard) => {
  console.log(body);
  const { data } = await axiosInstance.put(`cards/${cardId}`, body);
  return data;
};
