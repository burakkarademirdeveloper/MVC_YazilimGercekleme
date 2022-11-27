export interface SingleError {
  code: string;
  minimum: number;
  type: string;
  inclusive: boolean;
  message: string;
  path: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image: string;
  Role: string;
}

export interface Post {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
  title: string;
  content: string;
  authorId: string;
}

export interface Count {
  Post: number;
}

export interface UserDetails extends User {
  _count: Count;
  Post: Post[];
}
