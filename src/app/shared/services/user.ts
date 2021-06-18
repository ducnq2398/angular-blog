export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}

export interface Post{
  id: string;
  Uid: string;
  avatar: string;
  comment: number;
  image: string;
  like: number;
  name: string;
  timestamp: any;
  title: string;
}

export interface Comment{
  id: string;
  postId: string;
  name: string;
  message: string;
  avt: string;
  datetime: any
}
