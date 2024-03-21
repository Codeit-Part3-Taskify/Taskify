import axios from './axiosInstance';

export const uploadCardImage = async (columnId: number, imageUrl: File) => {
  console.log(imageUrl);
  const { data } = await axios.post(
    `columns/${columnId}/card-image`,
    {
      image: imageUrl
    },
    {
      headers: { 'Content-Type': 'multipart/form-data' }
    }
  );
  return data;
};
