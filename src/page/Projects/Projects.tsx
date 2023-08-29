import { useGetProjectsQuery } from "../../redux/modules/ProjectAPI";
import { ProjectsLayout } from "../../styledComponents/Projects";
import ProjectsBanner from "./ProjectsBanner";
import ProjectsList from "./ProjectsList";

export default function Projects() {
  const { data, error, isLoading, refetch } = useGetProjectsQuery("skipToken");
  console.log(data);

  return (
    <ProjectsLayout>
      <div>
        <h1 className="mainTitle">일간 인기 급상승 팀</h1>
        <ProjectsBanner data={data} />
      </div>
      <ProjectsList data={data} />
      <div>페이지네이션</div>
    </ProjectsLayout>
  );
}
