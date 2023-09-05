import { useGetProjectsQuery } from "../../redux/modules/ProjectAPI";
import { ProjectsLayout } from "../../styledComponents/Projects";
import Loading from "../Loading";
import ProjectsBanner from "./ProjectsBanner";
import ProjectsList from "./ProjectsList";

export default function Projects() {
  const { data, isLoading } = useGetProjectsQuery("skipToken");
  console.log(data);

  if (isLoading) {
    // 로딩 중이면 로딩 페이지를 보여줌
    return <Loading />;
  }

  return (
    <ProjectsLayout>
      <div>
        <h1 className="mainTitle">일간 인기 급상승 팀</h1>
        <ProjectsBanner data={data} />
      </div>
      <ProjectsList data={data} />
    </ProjectsLayout>
  );
}
