/* eslint-disable no-param-reassign */
import axios from 'axios';
import { TEAM } from 'src/constants/common';
import handleError from 'src/utils/handleError';

// 임시 토큰
const accessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTI3NCwidGVhbUlkIjoiMy01IiwiaWF0IjoxNzEwNTA5OTgzLCJpc3MiOiJzcC10YXNraWZ5In0.bs7A-8tp8FT9PcL1uIvbSQEJJpKEesjHZc8z280ZtCk';

const axiosInstance = axios.create({
  baseURL: `https://sp-taskify-api.vercel.app/${TEAM}/`,
  timeout: 5000 // 요청이 timeout보다 오래 걸리면 요청이 중단됩니다.
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

axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    if (error.response?.status === 401) {
      // 토큰 갱신 로직
    }
    handleError(error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
