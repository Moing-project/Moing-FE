export enum WorkAllowEnum {
  ALL_ALLOW = "all_allow",
  REQUIRED_ALLOW = "required_allow",
  NOT_ALLOW = "not_allow",
  SECRET = "secret",
}

export enum WorkTypeEnum {
  GAME = "게임",
  PLANNING = "기획",
  MOBILE = "모바일",
  BLOCK_CHAIN = "블록체인",
  SERVICE = "서비스",
  STUDY = "스터디",
  WEB = "웹",
  ALGORITHM = "코테/알고리즘",
  PROJECT = "프로젝트",
  MACHINE_LEARNING = "AI/머신러닝",
  UI_UX = "UI/UX",
}
export class WorkTypeFunctions {
  static GetWorkTypeEnums() {
    return Object.values(WorkTypeEnum);
  }

  static GetWorkTypeEnumKeyToString(value: string) {
    const result = Object.keys(WorkTypeEnum).find(
      (key) =>
        WorkTypeEnum[key as keyof typeof WorkTypeEnum].toLowerCase() ===
        value.toLowerCase()
    );
    return WorkTypeEnum[result as keyof typeof WorkTypeEnum];
  }
}

export enum WorkStackEnum {
  REACT = "React",
  JAVASCRIPT = "JavaScript",
  TYPESCRIPT = "TypeScript",
  VUE = "Vue",
  ANGULAR = "Angular",
  SVELTE = "Svelte",
  PYTHON = "Python",
  JAVA = "Java",
  C_CPLUSPLUS = "C/C++",
  C_SHARP = "C#",
  SWIFT = "Swift",
  DART = "Dart",
  NODE_JS = "Node.js",
  GO = "Go",
  SPRING = "Spring",
  DJANGO = "Django",
  NEST_JS = "NestJS",
  EXPRESS = "Express",
  GRAPH_QL = "GraphQL",
  SQL = "SQL",
  MONGO_DB = "MongoDB",
  FIRE_BASE = "FireBase",
  I_OS = "iOS",
  ANDROID = "Android",
  REACT_NATIVE = "React Native",
  AWS = "AWS",
  KUBERNETES = "Kubernetes",
  DOCKER = "Docker",
  GIT = "Git",
  FIGMA = "Figma",
  ZEPLIN = "Zeplin",
}
export class WorkStackFunctions {
  static GetWorkStackEnums() {
    return Object.values(WorkStackEnum);
  }

  static GetWorkStackEnumToString(value: string) {
    const result = Object.keys(WorkStackEnum).find(
      (key) => WorkStackEnum[key as keyof typeof WorkStackEnum] === value
    );
    return WorkStackEnum[result as keyof typeof WorkStackEnum];
  }
}

// export enum WorkAllowEnum {
//   ... (이전 내용 유지)
// }

// export enum WorkStackEnum {
//   // ... (이전 내용 유지)
// }

// export class WorkStackClass {
//   static getWorkStacks(): WorkStackEnum[] {
//     return Object.values(WorkStackEnum);
//   }
// }

// export const HelloGet = () => {
//   console.log("HelloGet");
//   return WorkStackClass.getWorkStacks();
// };
