/* eslint-disable no-param-reassign */
import axios from 'axios';
import { TEAM } from 'src/constants/common';

// 임시 토큰
const accessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTI3NCwidGVhbUlkIjoiMy01IiwiaWF0IjoxNzEwNTA5OTgzLCJpc3MiOiJzcC10YXNraWZ5In0.bs7A-8tp8FT9PcL1uIvbSQEJJpKEesjHZc8z280ZtCk';

const axiosInstance = axios.create({
  baseURL: `https://sp-taskify-api.vercel.app/${TEAM}/`,
  timeout: 5000 // 5초 이상 걸리면 Error 발생
});

// 요청 인터셉터 추가
axiosInstance.interceptors.request.use(
  config => {
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

export default axiosInstance;
