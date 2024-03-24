import axios from 'src/apis/axiosInstance';

const putInvitations = async (
  invitationId: number,
  inviteAccepted: boolean
) => {
  const { data } = await axios.put(`invitations/${invitationId}`, {
    inviteAccepted
  });
  return data;
};

export default putInvitations;
