import React from "react";

import * as I from "../../components/UsingIcons";
import * as S from "../../styledComponents/Projects";
import ProjectsListItem from "./ProjectsListItem";
import { useNavigate } from "react-router-dom";
import { SearchBox } from "../../styledComponents/commons/SearchInput";

export default function ProjectsList({ data }: any) {
  const navigate = useNavigate();

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
    <S.ProjectListSection>
      <h1 className="mainTitle">전체 팀 목록</h1>
      <article>
        <nav>
          <select name="" id=""></select>
          <select name="" id=""></select>
          <select name="" id=""></select>
        </nav>
        <SearchBox>
          <I.Search />
          <input
            type="text"
            placeholder="팀, 프로젝트, 워크스페이스 전체 검색"
            style={{ width: "240px" }}
          />
        </SearchBox>
      </article>
      <S.ProjectsListUl>
        <S.ProjectListMakeLi onClick={() => navigate("/projects/create")}>
          <h1>빠른 프로젝트 생성하기</h1>
          <I.ProjectMake />
          <p>
            내가 원하는 프로젝트가 없나요? <br />
            그러하면 원하는 프로젝트를 빠르게 생성해보세요!
          </p>
        </S.ProjectListMakeLi>
        {data.map((project: any) => (
          <ProjectsListItem key={project.id} project={project} />
        ))}
      </S.ProjectsListUl>
    </S.ProjectListSection>
  );
}
