import React, { useState } from "react";
import * as I from "../../components/UsingIcons";
import * as S from "../../styledComponents/Projects";
import ProjectsListItem from "./ProjectsListItem";
import { useNavigate } from "react-router-dom";
import { SearchBox } from "../../styledComponents/commons/SearchInput";
import Pagination from "../../components/Pagination";
import SearchSelector, { OptionType } from "./SearchSelector";
import { MultiValue } from "react-select";
import MultiSelector from "../ProjectCreate/MultiSelector";

export default function ProjectsList({ data }: any) {
  const navigate = useNavigate();

  // 페이지네이션 상태
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호
  const ITEM_PER_PAGE = 2; // 페이지당 아이템 수

  if (!data) {
    return null;
  }

  // 페이징
  const startIndex = (currentPage - 1) * ITEM_PER_PAGE;
  const endIndex = startIndex + ITEM_PER_PAGE;
  const totalPages = Math.ceil(data.length / ITEM_PER_PAGE);
  const itemsToDisplay = data.slice(startIndex, endIndex);

  // 페이지 변경 핸들러
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <S.ProjectListSection>
      <h1 className="mainTitle">전체 팀 목록</h1>
      <article>
        <nav></nav>
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
        {itemsToDisplay.map((project: any) => (
          <ProjectsListItem key={project.id} project={project} />
        ))}
      </S.ProjectsListUl>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </S.ProjectListSection>
  );
}
