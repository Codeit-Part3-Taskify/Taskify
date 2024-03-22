export interface CommentBody {
  content: string;
  cardId: number;
  columnId: number;
  dashboardId: number;
}

export interface PostComment {
  comments: {
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
  }[];
}
