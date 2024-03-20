export interface Assignee {
  id: number;
  nickname: string;
  profileImageUrl: string | null;
}

export interface CardData {
  assignee: Assignee;
  columnId: number;
  createdAt: string;
  dashboardId: number;
  description: string;
  dueDate: string;
  id: number;
  imageUrl: any | null;
  tags: string[];
  teamId: string;
  title: string;
  updatedAt: string;
}

export interface PostCard {
  assigneeUserId: number;
  dashboardId: number;
  columnId: number;
  title: string;
  description: string;
  dueDate?: string;
  tags?: string[];
  imageUrl?: string;
}
