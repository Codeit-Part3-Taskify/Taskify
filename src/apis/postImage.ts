import axios from './axiosInstance';

const postImage = async ({ fileData }: { fileData: any }) => {
  const formData = new FormData();
  formData.append('profileImageUrl', fileData);
  const res = await axios.post('users/me/image', formData);
  return res.data;
};

export default postImage;
