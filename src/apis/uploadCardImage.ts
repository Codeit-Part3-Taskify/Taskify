import axiosInstance from './axios';
import { Authorization } from './readCardList';

export const uploadCardImage = async (columnId: number, imageUrl: File) => {
  const { data } = await axiosInstance.post(
    `columns/${columnId}/card-image`,
    {
      image: imageUrl
    },
    { headers: { 'Content-Type': 'multipart/form-data', Authorization } }
  );
  return data;
};
