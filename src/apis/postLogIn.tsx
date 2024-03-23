import axios from './axiosInstance';

interface LogInData {
  email: string;
  password: string;
}

const postLogIn = async ({ email, password }: LogInData) => {
  const res = await axios.post('auth/login', { email, password });
  return res.data;
};

export default postLogIn;
