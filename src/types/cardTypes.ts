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
  imageUrl: string | null;
  tags: string[];
  teamId: string;
  title: string;
  updatedAt: string;
}

export interface PostCard {
  assigneeUserId: Number;
  dashboardId: Number;
  columnId: Number;
  title: String;
  description: String;
  dueDate: String;
  tags: String[];
  imageUrl: String;
}