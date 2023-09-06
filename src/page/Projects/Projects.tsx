import { useEffect, useState } from "react";
import { useGetProjectsQuery } from "../../redux/modules/ProjectAPI";
import { ProjectsLayout } from "../../styledComponents/Projects";
import Loading from "../Loading";
import ProjectsBanner from "./ProjectsBanner";
import ProjectsList from "./ProjectsList";
import axios from "axios";

export default function Projects() {
  // const { data, isLoading } = useGetProjectsQuery("skipToken");
  // console.log(data);

  // if (isLoading) {
  //   // 로딩 중이면 로딩 페이지를 보여줌
  //   return <Loading />;
  // }

  const [data, setData] = useState([]);

  useEffect(() => {
    // JSON 서버의 엔드포인트에 GET 요청을 보냅니다.
    axios
      .get("http://localhost:3001/team")
      .then((response: any) => {
        setData(response.data);
        console.log(data);
      })
      .catch((error: any) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <ProjectsLayout>
      <div>
        <h1 className="mainTitle">일간 인기 급상승 프로젝트</h1>
        <ProjectsBanner data={data} />
      </div>
      <ProjectsList data={data} />
    </ProjectsLayout>
  );
}
