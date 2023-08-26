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
