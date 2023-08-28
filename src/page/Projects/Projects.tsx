import { useGetProjectsQuery } from "../../redux/modules/ProjectAPI";
import ProjectsBanner from "./ProjectsBanner";
import ProjectsList from "./ProjectsList";

export default function Projects() {
  const { data, error, isLoading, refetch } = useGetProjectsQuery("skipToken");
  console.log(data);

  return (
    <main className="컨테이너">
      <h1>일간 인기 급상승 팀</h1>
      <ProjectsBanner />
      <h1>전체 팀 목록</h1>
      <ProjectsList data={data} />
    </main>
  );
}
