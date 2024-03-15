import { AxiosError, AxiosResponse } from 'axios';
import axiosInstance from './axiosInstance';

// 임시
const Authorization =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTI2NCwidGVhbUlkIjoiMy01IiwiaWF0IjoxNzEwNDkxNzU2LCJpc3MiOiJzcC10YXNraWZ5In0.ok4Qv3OQeQzq_R6wJf2upY44DE4wa2EIvf6e3ix7iMY';

export default function readCardList() {
  try {
    const result = axiosInstance
      .get('cards?columnId=16331', {
        headers: { Authorization }
      })
      .then(res => res.data);
    return result;
  } catch (e) {
    if (e instanceof AxiosError) {
      console.error(e.message);
    }
  }
  return null;
}
