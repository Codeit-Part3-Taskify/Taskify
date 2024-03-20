import axios, { AxiosError } from 'axios';
import axiosInstance from 'src/apis/axiosInstance';
import { Dashboard } from 'src/types/api';
import handleError from 'src/utils/handleError';

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
      }
    );
    return data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export default putDashboardTitle;
