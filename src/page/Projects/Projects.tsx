import { useEffect } from "react";
import { WorkStackFunctions, WorkStackEnum } from "../../types/WorkEnums";

export default function Projects() {
  useEffect(() => {
    console.log(WorkStackFunctions.GetWorkStackEnums());
    const dev: WorkStackEnum = WorkStackEnum.ANDROID;
    console.log(dev);
    console.log(WorkStackFunctions.GetWorkStackEnumToString("Kubernetes"));
  }, []);
  return <div>Projects</div>;
}
