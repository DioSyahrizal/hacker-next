export interface Story {
  comments_count: number;
  domain: string;
  id: number;
  points: number;
  time: number;
  time_ago: string;
  title: string;
  type: string;
  url: string;
  user: string;
}

export interface CommentStory {
  comments_count: number;
  domain: string;
  id: number;
  points: number;
  time: number;
  time_ago: string;
  title: string;
  type: string;
  url: string;
  user: string;
  comments: Comment[];
}

export interface Comment {
  content: string;
  id: number;
  level: number;
  time: number;
  time_ago: string;
  user: string;
  comments: InsideComment[];
}

export interface InsideComment {
  comments: any[];
  content: string;
  id: number;
  level: number;
  time: number;
  time_ago: string;
  user: string;
}
