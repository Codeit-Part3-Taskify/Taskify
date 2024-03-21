import axiosInstance from 'src/apis/axiosInstance';

const deleteDashboard = async (dashboardId: string | undefined) => {
  const { data } = await axiosInstance.delete(`/dashboards/${dashboardId}`);
  return data;
};

export default deleteDashboard;
