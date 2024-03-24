import axios from './axiosInstance';

interface SignUpData {
  email: string;
  nickname: string;
  password: string;
}

const postSignUp = async ({ email, nickname, password }: SignUpData) => {
  const res = await axios.post('users', { email, nickname, password });
  return res.data;
};

export default postSignUp;
