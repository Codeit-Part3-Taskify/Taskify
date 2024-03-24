import axios from './axiosInstance';

const getUserInfo = async () => {
  const res = await axios.get('users/me');
  return res.data;
};

export default getUserInfo;
