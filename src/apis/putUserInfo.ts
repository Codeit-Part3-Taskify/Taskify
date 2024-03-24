import axios from './axiosInstance';

interface PutUserInfoData {
  nickname: string;
  fileData: File;
}

const putUserInfo = async ({ nickname, fileData }: PutUserInfoData) => {
  const formData = new FormData();
  formData.append('profileImageUrl', fileData);
  formData.append('nickname', nickname);
  const res = await axios.put('users/me', formData);
  return res.data;
};

export default putUserInfo;
