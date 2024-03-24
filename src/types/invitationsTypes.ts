export interface InvitationsResponse {
  invitations: Invitation[];
  cursorId?: number;
}

export interface Invitation {
  createdAt: string;
  dashboard: Dashboard;
  id: number;
  inviteAccepted: boolean;
  invitee: Invite;
  inviter: Invite;
  teamId: string;
  updatedAt: string;
}

interface Invite {
  id: number;
  email: string;
  nickname: string;
}

interface Dashboard {
  id: number;
  title: string;
}
