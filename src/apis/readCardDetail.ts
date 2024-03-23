import { CardData } from 'src/types/cardTypes';
import axios from './axiosInstance';

const readCardDetail = async (cardId: number) => {
  const { data } = await axios.get<CardData>(`cards/${cardId}`);
  return data;
};

export default readCardDetail;
