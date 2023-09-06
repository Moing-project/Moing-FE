import {
  WorkAllowEnum,
  WorkStackEnum,
  WorkTypeEnum,
} from "../../types/WorkEnums";

export type ProjectType = {
  title: string;
  subject: keyof typeof WorkTypeEnum | null;
  needMember: number | null;
  date: string | null;
  allowType: keyof typeof WorkAllowEnum | null;
  stacks: Array<keyof typeof WorkStackEnum | null>;
  introduce: string;
  // imageSrc: Array<string> | undefined;
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
