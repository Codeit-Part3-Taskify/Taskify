import axios, { AxiosError } from 'axios';
import axiosInstance from 'src/apis/axiosInstance';
import { Dashboard } from 'src/types/api';

// 임시 토큰
const accessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTI3NCwidGVhbUlkIjoiMy01IiwiaWF0IjoxNzEwNTA5OTgzLCJpc3MiOiJzcC10YXNraWZ5In0.bs7A-8tp8FT9PcL1uIvbSQEJJpKEesjHZc8z280ZtCk';

const putDashboardTitle = async (
  dashboardId: string | undefined,
  title: string,
  color: string
) => {
  try {
    const { data } = await axiosInstance.put<Dashboard>(
      `/dashboards/${dashboardId}`,
      {
        title,
        color
      },
      {
        headers: { Authorization: `Bearer ${accessToken}` }
      }
    );
    return data;
  } catch (error) {
    // axios 에러
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      alert(axiosError.message);
      throw new Error(axiosError.message);
    }
    // SyntaxError, TypeError, ReferenceError 등의 에러
    if (error instanceof Error) {
      console.error(`에러 발생: ${error.message}`);
      throw Error;
    }
    // 그 밖의 에러
    console.error(`알 수 없는 에러: ${error}`);
    throw error;
  }
};

export default putDashboardTitle;
