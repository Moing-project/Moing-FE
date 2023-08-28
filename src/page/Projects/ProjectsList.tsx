import React from "react";
import { styled } from "styled-components";

import * as I from "../../components/UsingIcons";
import ProjectsListItem, { ProjectListLi } from "./ProjectsListItem";

export default function ProjectsList({ data }: any) {
  if (!data) {
    return null;
  }
  // 예시 데이터
  const projects = [
    {
      id: 0,
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj_2nw26JrrVHk4gxXiRUdgzNu5Bcx-zk9nA&usqp=CAU",
      type: "프로젝트",
      name: "백엔드 빽빽하게! 채워나가 볼까요?",
      stacks: ["파이썬", "플라스크"],
      introduce:
        "안녕하세요! 백엔드를 전문적으로 공부하고 있는 개간지 이노1팀입니다. 저희 같은 경우는 머리카락을 뽑으면 분신술을 사용할 수 있습니다. 감사합니다",
      state: "모집 시 마감",
    },
    {
      id: 1,
      imgUrl: "bit.ly/45eUEXa",

      type: "프로젝트",
      name: "백엔드 빽빽하게! 채워나가 볼까요?",
      stacks: ["파이썬", "리액트"],
      introduce: "안녕하세요!",
      state: "모집 마감",
    },
    {
      id: 2,
      imgUrl: "bit.ly/45eUEXa",
      type: "프로젝트",
      name: "백엔드 빽빽하게! 채워나가 볼까요?",
      stacks: ["파이썬", "리액트"],
      introduce: "안녕하세요!",
      state: "모집 마감",
    },
    {
      id: 3,
      imgUrl: "bit.ly/45eUEXa",
      type: "프로젝트",
      name: "백엔드 빽빽하게! 채워나가 볼까요?",
      stacks: ["파이썬", "리액트"],
      introduce: "안녕하세요!",
      state: "모집 마감",
    },
  ];

  return (
    <section>
      <article>
        <nav>
          <select name="" id=""></select>
          <select name="" id=""></select>
          <select name="" id=""></select>
        </nav>
        <nav>검색창</nav>
      </article>
      <ProjectsListUl>
        <ProjectListMakeLi>
          <h1>빠른 프로젝트 생성하기</h1>
          <I.ProjectMake />
          <p>
            내가 원하는 프로젝트가 없나요? <br />
            그러하면 원하는 프로젝트를 빠르게 생성해보세요!
          </p>
        </ProjectListMakeLi>
        {data.map((project: any, index: any) => (
          <ProjectsListItem key={project.id} project={project} />
        ))}
      </ProjectsListUl>
    </section>
  );
}

const ProjectsListUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 368px);
  grid-auto-rows: 244px;
  gap: 16px;
`;

const ProjectListMakeLi = styled(ProjectListLi)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;

  h1 {
    color: var(--font-main);
    text-align: center;

    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px; /* 122.222% */
  }

  p {
    color: #858585;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px; /* 121.429% */
  }
`;
