export interface MemberData {
  id: number;
  userId?: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  createdAt: Date;
  updatedAt: Date;
  isOwner?: boolean;
}

export interface MemberList {
  members: MemberData[];
  totalCount: 0;
}
