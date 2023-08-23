import { useEffect } from "react";
import { WorkStackFunctions, WorkStackEnum } from "../../types/WorkEnums";
import ProjectsBanner from "./ProjectsBanner";
import ProjectsList from "./ProjectsList";

export default function Projects() {
  // useEffect(() => {
  //   console.log(WorkStackFunctions.GetWorkStackEnums());
  //   const dev: WorkStackEnum = WorkStackEnum.ANDROID;
  //   console.log(dev);
  //   console.log(WorkStackFunctions.GetWorkStackEnumToString("Kubernetes"));
  // }, []);
  return (
    <main className="컨테이너">
      <h1>일간 인기 급상승 팀</h1>
      <ProjectsBanner />
      <h1>전체 팀 목록</h1>
      <ProjectsList />
    </main>
  );
}
