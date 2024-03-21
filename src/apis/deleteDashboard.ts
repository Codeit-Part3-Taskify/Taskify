import axios from 'src/apis/axiosInstance';

const deleteDashboard = async (dashboardId: string | undefined) => {
  const { data } = await axios.delete(`/dashboards/${dashboardId}`);
  return data;
};

export default deleteDashboard;
