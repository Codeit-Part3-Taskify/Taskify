import axios from './axiosInstance';

const postPassword = async (newPassword: string) => {
  const res = await axios.put('auth/password', { newPassword });
  return res.data;
};

export default postPassword;

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
