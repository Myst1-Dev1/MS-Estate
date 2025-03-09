export type Post = {
    id: string;
    title: string;
    address: string;
    bathroom: number;
    bedroom: number;
    city: string;
    createdAt: string;
    images: string[];
    latitude: string;
    longitude: string;
    price: number;
    property: string;
    type: string;
    userId: string;
  }

export type ProfilePostsResponseType = {
  userPosts: Post[];
  savedPosts: Post[];
}

export type Message = {
  chatId:string;
  createdAt:string;
  id:string;
  text:string;
  userId:string;
};

type User = {
  id: string;
  username: string;
  avatar: string | null;
};

export type Chat = {
  id: string;
  userIDs: string[];
  createdAt: string;
  seenBy: string[];
  lastMessage: string;
  messages: Message[];
  receiver: User;
};