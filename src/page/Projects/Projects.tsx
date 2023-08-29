<<<<<<< HEAD
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
=======
import { useEffect } from 'react';
import { WorkStackFunctions, WorkStackEnum } from '../../types/WorkEnums';
import ProjectsBanner from './ProjectsBanner';
import ProjectsList from './ProjectsList';
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from 'react-bootstrap';

export default function Projects() {
  // useEffect(() => {
  //   console.log(WorkStackFunctions.GetWorkStackEnums());
  //   const dev: WorkStackEnum = WorkStackEnum.ANDROID;
  //   console.log(dev);
  //   console.log(WorkStackFunctions.GetWorkStackEnumToString("Kubernetes"));
  // }, []);

  // let active = 2; // Added this line
  // let items = [];
  // for (let number = 1; number <= 5; number++) {
  //   items.push(
  //     <Pagination.Item key={number} active={number === active}>
  //       {number}
  //     </Pagination.Item>
  //   );
  // }

  return (
    <div>
      <main className="컨테이너">
        <h1>일간 인기 급상승 팀</h1>
        <ProjectsBanner />
        <h1>전체 팀 목록</h1>
        <ProjectsList />
      </main>
      <Pagination>
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>

        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        {/* <Pagination.Item active>{4}</Pagination.Item> */}
        <Pagination.Item>{4}</Pagination.Item>
        <Pagination.Item>{5}</Pagination.Item>
        {/* <Pagination.Item>{6}</Pagination.Item>
        <Pagination.Item disabled>{7}</Pagination.Item> */}

        <Pagination.Next />
      </Pagination>
    </div>
>>>>>>> b5e63e9 ([add]페이지네이션디자인)
  );
}
