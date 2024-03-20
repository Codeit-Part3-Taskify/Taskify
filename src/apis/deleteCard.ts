import axiosInstance from './axios';
import { Authorization } from './readCardList';

export const deleteCard = async () => {
  const { data } = await axiosInstance.delete('cards', {
    headers: { Authorization }
  });
  return data;
};
