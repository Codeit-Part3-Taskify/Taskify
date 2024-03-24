export interface CommentBody {
  content: string;
  cardId: number;
  columnId: number;
  dashboardId: number;
}

export interface CommentData {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  cardId: number;
  author: {
    profileImageUrl: string;
    nickname: string;
    id: number;
  };
}

export interface PostComment {
  comments: CommentData[];
  cursorId: number;
}
