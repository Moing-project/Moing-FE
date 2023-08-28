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
