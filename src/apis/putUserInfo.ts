import axios from './axiosInstance';

interface PutUserInfoData {
  nickname: string;
  profileImageUrl: string;
}

const putUserInfo = async ({ nickname, profileImageUrl }: PutUserInfoData) => {
  const res = await axios.put('users/me', { nickname, profileImageUrl });
  return res.data;
};

export default putUserInfo;
