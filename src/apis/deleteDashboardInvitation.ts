import axios from 'axios';
import axiosInstance from 'src/apis/axiosInstance';
import { DashboardInvitations } from 'src/types/api';
import handleError from 'src/utils/handleError';

const deleteDashboardInvitation = async (
  dashboardId: string | undefined,
  invitationId: number
) => {
  try {
    const { data } = await axiosInstance.delete<DashboardInvitations>(
      `/dashboards/${dashboardId}/invitations/${invitationId}`
    );
    return data;
  } catch (error) {
    handleError(error);
    throw error;
  }
};

export default deleteDashboardInvitation;
