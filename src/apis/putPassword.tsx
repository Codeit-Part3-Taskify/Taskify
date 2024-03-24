import axios from './axiosInstance';

interface PutPasswordData {
  password: string;
  newPassword: string;
}

const putPassword = async ({ password, newPassword }: PutPasswordData) => {
  const res = await axios.put('auth/password', { password, newPassword });
  return res.data;
};

export default putPassword;

// import axios from './axiosInstance';

// type PostPasswordMutationFn = (
//   password: string,
//   newPassword: string
// ) => Promise<any>;

// const postPassword: PostPasswordMutationFn = async (password, newPassword) => {
//   const res = await axios.put('auth/password', { password, newPassword });
//   return res.data;
// };

// export default postPassword;
