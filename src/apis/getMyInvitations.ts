import { InvitationsResponse } from 'src/types/invitationsTypes';
import axios from './axiosInstance';

const getMyInvitations = async (
  size?: number,
  title?: string
): Promise<InvitationsResponse> => {
  const { data } = await axios.get<InvitationsResponse>('invitations', {
    params: {
      size,
      title
    }
  });

  return data;
};

export default getMyInvitations;
