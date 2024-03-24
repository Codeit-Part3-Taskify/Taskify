import { InvitationsResponse } from 'src/types/invitationsTypes';
import axios from './axiosInstance';

const getMyInvitations = async (
  title?: string,
  size?: number
): Promise<InvitationsResponse> => {
  const { data } = await axios.get<InvitationsResponse>('invitations', {
    params: {
      title,
      size
    }
  });

  return data;
};

export default getMyInvitations;
