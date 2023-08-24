export type Auth = UserEmailDataType & {
  password: string;
};

export type SingInData = Auth & NicknameDataType;

export type NicknameDataType = {
  nickname: string;
};

export type UserEmailDataType = {
  email: string;
};

export type EmailCode = {
  code: string;
};

export type RequestData<T> = {
  postId?: number;
  commentId?: number;
  payload?: T;
};

export type LoginData = {
  nickname: string;
  userImage: string;
  introduce: string | null;
};

export type CheckUserData = {
  username?: string;
  nickname?: string;
};

export type SignInErrorData = {
  email?: string;
  nickname?: string;
  password?: string;
};

export enum ImageEnum {
  defalutImage = "dafault",
}

export type KanbanType = {
  name: string;
  content: string;
  KanbanT: KanbanEnum;
};

export enum KanbanEnum {
  noStart = "no Start",
  inProcess = "in Process",
  done = "done",
}

// const Test: KanbanType = {
//   name: "Hello",
//   content: "World",
//   KanbanT: KanbanEnum.noStart,
// };

export type ProjectType = {
  name: string;
  subject: string | null;
  needMember: number;
  date: string | null;
  allowType: string | null;
  stack: string[];
  introduce: string;
  imageSrc: string;
};
