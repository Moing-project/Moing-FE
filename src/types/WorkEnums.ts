// export enum WorkAllowEnum {
//   ALL_ALLOW = "누구나 참여",
//   REQUIRED_ALLOW = "참여 승인 (관리자 승인 시 참여 가능)",
//   NOT_ALLOW = "참여 불가 (프로젝트는 공개되지만 참여 불가능)",
//   SECRET = "비공개",
// }
// export class WorkAllowFunctions {
//   static GetWorkAllowEnums() {
//     return Object.values(WorkAllowEnum);
//   }

//   static GetWorkAllowEnumKeyToString(value: string) {
//     const result = Object.keys(WorkAllowEnum).find(
//       (key) =>
//         WorkAllowEnum[key as keyof typeof WorkAllowEnum].toLowerCase() ===
//         value.toLowerCase()
//     );
//     return WorkAllowEnum[result as keyof typeof WorkAllowEnum];
//   }
// }

export enum WorkAllowEnum {
  ALL_ALLOW = "누구나 참여",
  REQUIRED_ALLOW = "참여 승인 (관리자 승인 시 참여 가능)",
  NOT_ALLOW = "참여 불가 (프로젝트는 공개되지만 참여 불가능)",
  SECRET = "비공개",
}

export class WorkAllowFunctions {
  static GetWorkAllowEnumsAsObject() {
    const enumKeys = Object.keys(
      WorkAllowEnum
    ) as (keyof typeof WorkAllowEnum)[];
    const enumsAsObject = {} as Record<keyof typeof WorkAllowEnum, string>;

    enumKeys.forEach((key) => {
      const value = WorkAllowEnum[key];
      const convertedValue =
        WorkAllowFunctions.GetWorkAllowEnumKeyToString(value);
      enumsAsObject[key] = convertedValue;
    });

    return enumsAsObject;
  }

  static GetWorkAllowEnumKeyToString(value: string) {
    const result = Object.keys(WorkAllowEnum).find(
      (key) =>
        WorkAllowEnum[key as keyof typeof WorkAllowEnum].toLowerCase() ===
        value.toLowerCase()
    );
    return WorkAllowEnum[result as keyof typeof WorkAllowEnum];
  }
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
