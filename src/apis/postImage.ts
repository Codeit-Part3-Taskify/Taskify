import axios from './axiosInstance';

const postImage = async (file: File) => {
  const formData = new FormData();
  formData.append('image', file);
  const res = await axios.post('users/me/image', formData);
  return res.data;
};

export default postImage;
