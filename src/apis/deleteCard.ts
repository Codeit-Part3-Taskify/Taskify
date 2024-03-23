import axios from './axiosInstance';

export const deleteCard = async (cardId: number) => {
  const { data } = await axios.delete(`cards/${cardId}`);
  return data;
};
