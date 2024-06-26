/* eslint-disable no-param-reassign */
import axios from 'axios';
import Cookies from 'js-cookie';
import { TEAM } from 'src/constants/common';
import handleError from 'src/utils/handleError';

const axiosInstance = axios.create({
  baseURL: `https://sp-taskify-api.vercel.app/${TEAM}/`,
  timeout: 5000 // 요청이 timeout보다 오래 걸리면 요청이 중단됩니다.
});

// 요청 인터셉터 추가
axiosInstance.interceptors.request.use(
  config => {
    const accessToken = Cookies.get('accessToken');
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
