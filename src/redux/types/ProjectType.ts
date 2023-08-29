import { WorkStackEnum } from "../../types/WorkEnums";

export type ProjectType = {
  title: string;
  subject: string | null;
  needMember: number;
  date: string | null;
  allowType: string | null;
  stacks: Array<keyof typeof WorkStackEnum | null>;
  introduce: string;
  imageSrc: string;
};

export type GetProjectsType = {
  imageSrc: string;
  name: string;
  stacks: string[];
  introduce: string;
  endTime: string;
};

export type GetProjectListType = GetProjectsType[];

// 프로젝트 디테일 타입
type Member = {
  userId: number;
  profileImage: string;
  nickname: string;
};

export type OneProjectType = {
  name: string;
  subject: string;
  totalMember: number;
  lastTime: string | number | Date | undefined;
  allowType: string;
  stacks: string[];
  introduce: string;
  imageSrc: string;
  members: Member[];
};
